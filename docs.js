const fs = require('fs')
const path = require('path')
const url = require('url')
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
      .replace(/^\s+|\s+$/g,'')
      .replace(/\n#\s+/g,'\n')
      .replace(/^Step/g, '')
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
        const dirname = path.basename(path.dirname(example))
        console.log('dirname', dirname)
        const exampleUrl = `https://github.com/davidwells/sls-workshop/tree/master/${dirname}`;
        const completeLink = 'link';
        const description = (contents) ? `<br/> stuff` : '';
        // add table rows
        md += `| [${formatPluginName(dirname)}](${exampleUrl}) ${description} | ${completeLink} |\n`;
      });

      return md;
    },
    GENERATE_LESSONS_STEPS(content, options, instance) {
      const lessonFiles = globby.sync(['**', '!node_modules'], {
        cwd: instance.outputDir
      })
      const jsRegex = /\/\* Step([\s\S]*?)\*\//g
      const ymlRegex = / *?# Step([\s\S]*?) #\n*?/g
      var matches = []
      if (lessonFiles) {
        lessonFiles.map((f) => {
          const fileContents = fs.readFileSync(path.join(instance.outputDir, f), 'utf8')
          const fileType = path.extname(f)
          var regex = jsRegex
          if (fileType === '.js') {
            regex = jsRegex
          } else if (fileType === '.yml' || fileType === '.yaml') {
            regex = ymlRegex
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
      // console.log('clean', cleanMatches(matches))
      const steps = cleanMatches(matches).sort()

      return steps.join('\n\n')
    }
  }
}

markdownMagic(['README.md', '_instructor/**/**.md'], config, () => {
  console.log('Docs updated!'); // eslint-disable-line
})
