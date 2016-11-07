'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var argv = require('yargs').argv;
var env = require('../env');

// SCSS Compiation
gulp.task('styles', function() {
    var compiled = gulp.src('./' + env.DIR_SRC + 'styles/screen.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('screen.css'));

    // Minify if production
    if(argv.prod) {
        compiled.pipe(minify())
            .pipe(rename({
                basename: 'screen',
                extname: '.min.css'
            }));
    }

    compiled.pipe(gulp.dest(env.DIR_THEME + 'assets/styles'));
});