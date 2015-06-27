'use strict';

var jsrender = require('node-jsrender');
var Promise = require('promise');

exports.name = 'jsrender';
exports.outputFormat = 'html';

var templateIndex = 1;

exports.compile = function (str, options) {
  var name = 'jstransformer-' + templateIndex++;
  jsrender.loadString(name, str);
  return function (locals) {
    return jsrender.render[name](locals || {})
  };
};

exports.compileFile = function (filename, options) {
  var name = 'jstransformer-' + templateIndex++;
  jsrender.loadFileSync(name, filename);
  return function (locals) {
    return jsrender.render[name](locals || {})
  };
};

exports.compileFileAsync = function (filename, options) {
  return new Promise(function (fulfill, reject) {
    var name = 'jstransformer-' + templateIndex++;
    jsrender.loadFile(name, filename, function (err, template) {
      if (err) {
        reject(err)
      }
      else {
        fulfill(function (locals) {
          return jsrender.render[name](locals || {})
        });
      }
    });
  });
};
