/**
 Script used for creating docs. Nothing to see here
 */
const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')
const globby = require('markdown-magic').globby

console.log('Post process lesson files')

const removeComments = / *?\<\!-- ([\s\S]*?) ?--\>\n\n*?/g

const directories = [
  'lessons-code-complete/**/**.md',
  'lessons/**/**.md',
  '!node_modules'
]

const lessonFiles = globby.sync(directories)

if (lessonFiles) {
  lessonFiles.map((f) => {
    const filePath = path.resolve(f)
    console.log('filePath', filePath)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    //console.log(fileContents)
    const fileType = path.extname(f)

    const updatedContents = fileContents.replace(removeComments, '')
    fs.writeFileSync(filePath, updatedContents)
    //console.log('updatedContents', updatedContents)
  })
}
