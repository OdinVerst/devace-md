'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const del = require('del');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));

});

gulp.task('clean', function() {
    return del(['build/css']);
});

gulp.task('default', gulp.series(
    'sass', 'browser-sync','watch'
));