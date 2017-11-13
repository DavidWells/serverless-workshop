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

const config = {
  transforms: {
    GENERATE_LESSONS_LIST() {
      const examples = globby.sync(['_instructor/**/**.md']);
      console.log('examples', examples)
      // Make table header
      let md = '| Lesson | Final Code  |\n';
      md += '|:--------------------------- |:-----|\n';
      examples.forEach((example) => {
        const contents = fs.readFileSync(example, 'utf8')
        const dirname = path.dirname(example)
        const exampleUrl = `https://github.com/davidwells/sls-workshop/tree/master/${dirname}`;
        const completeLink = 'link';
        const description = (contents) ? `<br/> stuff` : '';
        // add table rows
        md += `| [${formatPluginName(dirname)}](${exampleUrl}) ${description} | ${completeLink} |\n`;
      });

      return md;
    }
  }
};


const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config, () => {
  console.log('Docs updated!'); // eslint-disable-line
});
