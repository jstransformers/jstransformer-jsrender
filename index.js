'use strict'

const jsrender = require('node-jsrender')

exports.name = 'jsrender'
exports.outputFormat = 'html'

let templateIndex = 1

exports.compile = function (str) {
  const name = 'jstransformer-' + templateIndex++
  jsrender.loadString(name, str)
  return locals => {
    return jsrender.render[name](locals || {})
  }
}

exports.compileFile = function (filename) {
  const name = 'jstransformer-' + templateIndex++
  jsrender.loadFileSync(name, filename)
  return locals => {
    return jsrender.render[name](locals || {})
  }
}

exports.compileFileAsync = function (filename) {
  return new Promise((resolve, reject) => {
    const name = 'jstransformer-' + templateIndex++
    jsrender.loadFile(name, filename, err => {
      if (err) {
        return reject(err)
      }

      resolve(locals => {
        return jsrender.render[name](locals || {})
      })
    })
  })
}
