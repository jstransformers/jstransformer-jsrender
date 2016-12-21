'use strict'

var jsrender = require('node-jsrender')
var Promise = require('promise')

exports.name = 'jsrender'
exports.outputFormat = 'html'

var templateIndex = 1

exports.compile = function (str) {
  var name = 'jstransformer-' + templateIndex++
  jsrender.loadString(name, str)
  return function (locals) {
    return jsrender.render[name](locals || {})
  }
}

exports.compileFile = function (filename) {
  var name = 'jstransformer-' + templateIndex++
  jsrender.loadFileSync(name, filename)
  return function (locals) {
    return jsrender.render[name](locals || {})
  }
}

exports.compileFileAsync = function (filename) {
  return new Promise(function (resolve, reject) {
    var name = 'jstransformer-' + templateIndex++
    jsrender.loadFile(name, filename, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve(function (locals) {
          return jsrender.render[name](locals || {})
        })
      }
    })
  })
}
