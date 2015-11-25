var gulp = require('./gulp')([
  'browserify',
  'css',
  'fonts',
  'html',
  'images',
  'serve',
  'watch',
]);

gulp.task('build', ['browserify', 'html', 'css', 'fonts', 'images']);
gulp.task('default', ['build', 'serve', 'watch']);
