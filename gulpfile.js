'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
  return gulp.src('./Portfolio_AM_Bootstrap/AM_Portfolio/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./Portfolio_AM_Bootstrap/AM_Portfolio/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./Portfolio_AM_Bootstrap/AM_Portfolio/scss/**/*.scss', ['sass']);
});