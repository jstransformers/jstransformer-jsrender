# jstransformer-jsrender

[JsRender](http://www.jsviews.com/#jsrender) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jsrender/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jsrender)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-jsrender/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-jsrender)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jsrender/master.svg)](http://david-dm.org/jstransformers/jstransformer-jsrender)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-jsrender.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jsrender.svg)](https://www.npmjs.org/package/jstransformer-jsrender)

## Installation

    npm install jstransformer-jsrender

## API

```js
var jsrender = require('jstransformer')(require('jstransformer-jsrender'))

jsrender.render('Hello {{:name}}!', {name: "World"}).body
//=> 'Hello World!'
```

## License

MIT
