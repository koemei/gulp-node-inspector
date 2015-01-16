'use strict';

var gulp = require('gulp');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');

module.exports = function(options) {
  options = options || {};
  gulp.task('node-inspector', function(cb) {
    var args = [require.resolve('node-inspector/bin/inspector')];
    [
      'web-port',
      'web-host',
      'debug-port',
      'save-live-edit',
      'readTimeout',
      'stack-trace-limit',
      'preload',
      'hidden'
    ].forEach(function(option) {
      if (option in options) {
        args.push('--' + option);
        if (option === 'hidden') {
          args.push(JSON.stringify(options[option]));
          return;
        }
        args.push(options[option]);
      }
    });
    var child = spawn('node', args, {
      stdio: 'inherit'
    });
    child.on('error', function(err) {
      gutil.log(gutil.colors.red('node-inspector error: ' + err.message));
    });
    child.on('exit', function() {
      gutil.log(gutil.colors.red('node-inspector process stopped'));
    });
    // calling callback for alerting gulp that the task is finished, probably we should do better.
    cb();
  });
};
