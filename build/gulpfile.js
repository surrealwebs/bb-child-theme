var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./tasks');

gulp.task('default', ['styles'], function () {
    gulp.watch('src/styles/**/*.{sass,scss}', ['styles']);
});