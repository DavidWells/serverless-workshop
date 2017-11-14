const fs = require('fs')
const path = require('path')

const t = fs.readFileSync(path.join(__dirname, 'serverless.yml'), 'utf8')

const x = t.match(/ *?# (Step [0-9].*?\n((.|\n|\r))*?)/g)
console.log(x)

const y = fs.readFileSync(path.join(__dirname, 'handler.js'), 'utf8')
// console.log('y', y)
const jsRegex = /\/\* Step([\s\S]*?)\*\//g
const z = y.match(jsRegex)

console.log(z)
