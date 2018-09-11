'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


gulp.task('default', ['clean'], function() {
    // gulp.start('sass', 'browser-sync', 'sprite','fileinclude','watch');
});

gulp.task('sass', function () {
    return gulp.src('./src/sccs/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});