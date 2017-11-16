const fs = require('fs')
const path = require('path')

const t = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
console.log(t)
const htmlRegex = / *?\<\!-- Step([\s\S]*?) ?--\>\n*?/g

const x = t.match(htmlRegex)
console.log(x)

const clean = x.map((m) => {
  return m
  .replace(/^\s+|\s+$/g,'')
  .replace(/\/\*/g, '') // remove js comments
  .replace(/\*\//g, '') // remove js comments
  .replace(/^#/g, '') // remove # comments
  .replace(/#$/g, '') // remove # comments
  .replace(/^\<\!--/g, '') // remove html comments
  .replace(/--\>$/g, '') // remove html comments
  .replace(/^\s+|\s+$/g,'')
  .replace(/\n#\s+/g,'\n')
  .replace(/^Step\s+/g, '')
})

console.log('clean', clean)
// const ymlRegex = / *?# Step([\s\S]*?) #\n*?/g
// // singleLine const x = t.match(/ *?# (Step [0-9].*?\n((.|\n|\r))*?)/g)
// const x = t.match(ymlRegex)
// console.log(x)
//
// const y = fs.readFileSync(path.join(__dirname, 'handler.js'), 'utf8')
// // console.log('y', y)
// const jsRegex = /\/\* Step([\s\S]*?)\*\//g
// const z = y.match(jsRegex)
//
// console.log(z)
//
// var matches = []
//
// if (x) {
//   matches = matches.concat(x)
// }
// if (z) {
//   matches = matches.concat(z)
// }
//
// console.log(matches)
//
// const clean = matches.map((m) => {
//   return m
//     .replace(/^\s+|\s+$/g,'')
//     .replace(/\/\*/g, '') // remove js comments
//     .replace(/\*\//g, '') // remove js comments
//     .replace(/^#/g, '') // remove # comments
//     .replace(/#$/g, '') // remove # comments
//     .replace(/^\s+|\s+$/g,'')
//     .replace(/\n#\s+/g,'\n')
// })
//
// // alpha sort
// console.log(clean.sort())
