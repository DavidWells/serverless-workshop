/**
 Script used for creating docs. Nothing to see here
 */
const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')
const globby = require('markdown-magic').globby

const toTitleCase = (str) => { // eslint-disable-line
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const formatPluginName = (string) => { // eslint-disable-line
  return toTitleCase(string.replace(/-/g, ' '));
}

const cleanMatches = (matches) => {
  return matches.map((m) => {
    return m
      .replace(/^\s+|\s+$/g,'')
      .replace(/\/\*/g, '') // remove js comments
      .replace(/\*\//g, '') // remove js comments
      .replace(/^#/g, '') // remove # comments
      .replace(/#$/g, '') // remove # comments
      .replace(/^\<\!--/g, '') // remove html comments
      .replace(/--\>$/g, '') // remove html comments
      .replace(/^\s+|\s+$/g,'')
      //.replace(/^!$/g,'') // remove trailing !
      .replace(/\n#\s+/g,'\n')
      .replace(/^Step\s+/g, '')
  })
}

const config = {
  transforms: {
    GENERATE_LESSONS_LIST(content, options) {
      const examples = globby.sync(['_instructor/**/**.md']);
      console.log('examples', examples)
      // Make table header
      let md = '| Lesson | Final Code  |\n';
      md += '|:--------------------------- |:-----|\n';
      examples.forEach((example) => {
        const contents = fs.readFileSync(example, 'utf8')
        const parentDir = path.basename(path.dirname(path.dirname(example)))
        const dirname = path.dirname(example)
        const niceDirname = path.basename(path.dirname(example))

        const repoBase = 'https://github.com/davidwells/sls-workshop/tree/master'
        const baseLink = `${repoBase}/${dirname}`

        const lessonLink = baseLink.replace(/_instructor/g, 'lessons');
        const answersLink = baseLink.replace(/_instructor/g, 'lessons-code-complete');
        //console.log(content)
        const heading = contents.match(/^# (.*)/g)
        console.log('heading', heading)
        const description = (heading && heading[0]) ? heading[0].replace("# ", '') : '';
        // add table rows
        md += `| [${formatPluginName(niceDirname)}](${lessonLink}) <br/> ${description} | [Answers](${answersLink})  |\n`;
        // md += baseLink
      });

      return md;
    },
    GENERATE_LESSONS_STEPS(content, options, instance) {

      //console.log('instance.outputDir', instance.outputDir)

      // if (instance.outputDir !== "_instructor/core-concepts/1-http-hello-world") {
      //   return content
      // }
      const lessonFiles = globby.sync(['**', '!node_modules'], {
        cwd: instance.outputDir
      })
      const jsRegex = /\/\* Step([\s\S]*?)\*\//g
      const ymlRegex = / *?# Step([\s\S]*?) #\n*?/g
      const htmlRegex = / *?\<\!-- Step([\s\S]*?) ?--\>\n*?/g
      var matches = []
      if (lessonFiles) {
        lessonFiles.map((f) => {
          const filePath = path.join(instance.outputDir, f)
          if (fs.lstatSync(filePath).isDirectory()) {
            // skip dirs
            return;
          }
          const fileContents = fs.readFileSync(filePath, 'utf8')
          const fileType = path.extname(f)
          var regex = jsRegex
          if (fileType === '.js') {
            regex = jsRegex
          } else if (fileType === '.yml' || fileType === '.yaml') {
            regex = ymlRegex
          } else if (fileType === '.md') {
            regex = htmlRegex
          }

          const hasMatch = fileContents.match(regex)

          if (hasMatch) {
            const formatMatch = hasMatch.map((match) => {
              return match.replace('this_file', `\`${f}\``)
            })
            matches = matches.concat(formatMatch)
          }
        })
      }

      // console.log('matches', matches)
      const steps = cleanMatches(matches)

      const sortedSteps = steps.reduce((accumulator, currentValue, currentIndex, array) => {
         const number = currentValue.match(/^[0-9]{1,3}/)[0]
         // console.log(number)
         // console.log(parseInt(number, 10))
         accumulator[currentIndex] = {
           step: parseInt(number, 10),
      	   value: currentValue
         }
         return accumulator
      }, []).sort(function(a,b){
        return a.step - b.step
      }).map((item) => {
        return item.value
      })

      console.log('sortedSteps', sortedSteps)

      return sortedSteps.join('\n\n')
    }
  }
}

markdownMagic(['README.md', '_instructor/**/**.md'], config, () => {
  console.log('Docs updated!'); // eslint-disable-line
})
