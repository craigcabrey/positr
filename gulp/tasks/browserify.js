var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = function() {
  return browserify({
    entries: 'src/js/main.js',
    debug: true
  })
    .transform('babelify', {
      presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
};
