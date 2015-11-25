var gulp = require('gulp');

module.exports = function() {
  return gulp.src([
    './src/**/*.{jpg,png}',
  ])
    .pipe(gulp.dest('dist'));
};
