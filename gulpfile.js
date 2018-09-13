'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const del = require('del');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

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

gulp.task('concat_js', function() {
    //An array of files is required for the correct order of contact
    return gulp.src(['./src/js/**/*.js']) //file array need for
        .pipe(concat('all.js'))
        .pipe(minify({
            ext:{
                src:'',
                min:'.min.js'
            },
            noSource: false}))
        .pipe(gulp.dest('./build/js'));
});


gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/**/*.js', gulp.series('concat_js'));

});



gulp.task('clean', function() {
    return del(['build/css']);
});

gulp.task('default', gulp.series(
    'sass','concat_js', 'browser-sync','watch'
));