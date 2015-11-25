var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = function() {
  return gulp.src([
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/font-awesome/css/font-awesome.css',
    './src/**/*.css',
  ])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist/css'));
};
