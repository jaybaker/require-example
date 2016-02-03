var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    size = require('gulp-size'),
    buffer = require('vinyl-buffer');

gulp.task('scripts', function() {
    return browserify('./js/main.js', {debug: true})
        .bundle()
        .pipe(buffer())
        .pipe(uglify())
        .pipe(size())
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('js/templates/*.hbs', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
