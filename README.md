# gulp-node-inspector

A gulp node-inspector wrapper

Perfect for development.

## Installation

`npm install gulp-node-inspector --save-dev`

## Usage

```javascript
// Gulpfile.js
var gulp = require('gulp');
var nodeInspector = require('gulp-node-inspector');

gulp.task('debug', function() {

  gulp.src(['app.js']) // any given file is ignored
    .pipe(nodeInspector());
});
```

Example with all available options (default values):

```javascript
// Gulpfile.js
var gulp = require('gulp');
var nodeInspector = require('gulp-node-inspector');
gulp.task('debug', function() {

  gulp.src(['app.js'])
    .pipe(nodeInspector({
      debugPort: 5858,
      webHost: '0.0.0.0',
      webPort: 8080,
      saveLiveEdit: false,
      preload: true,
      inject: true,
      hidden: [],
      stackTraceLimit: 50,
      sslKey: '',
      sslCert: ''
    }));
});
```

Enter `gulp debug` in your shell to start the node-inspector.

## Options

You can pass an object to `nodeInspector` with options [specified in node-inspector config](https://github.com/node-inspector/node-inspector#options).  
Options are written in camelCase style!

