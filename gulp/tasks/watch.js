var gulp = require('gulp');

module.exports = function () {
  gulp.watch(['src/**/*.html'], ['html']);
  gulp.watch(['src/**/*.css'], ['css']);
  gulp.watch(['src/**/*.js'], ['browserify']);
};
