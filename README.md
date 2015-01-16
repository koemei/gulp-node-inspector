# gulp-node-inspector

A gulp node-inspector wrapper

Perfect for development.

## Usage

### **nodeInspector([options])**

You can pass an object to node-inspector with options [specified in node-inspector config](https://github.com/node-inspector/node-inspector#options).

## Example

```javascript
// Gulpfile.js
var gulp = require('gulp')
var nodeInspector = require('gulp-node-inspector');

gulp.task('debug', function () {
  nodeInspector({
    'web-port': 8081,
    'web-host': 'localhost',
    'debug-port': 5082,
    'save-live-edit': false,
    preload: false,
    'stack-trace-limit': 4
  });
});
```

It works well with [gulp-nodemon](https://github.com/JacksonGariety/gulp-nodemon)
