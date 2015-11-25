var gulp = require('./gulp')([
  'browserify',
  'css',
  'fonts',
  'html',
  'serve',
  'watch',
]);

gulp.task('build', ['browserify', 'html', 'css', 'fonts']);
gulp.task('default', ['build', 'serve', 'watch']);
