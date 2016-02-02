var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber');

gulp.task('scripts', function() {
    return browserify('./js/main.js', {debug: true})
        .bundle()
        .pipe(source('bundle.js'))
        //gulp.src('static/js/*.js')
        //.pipe(plumber)
        //.pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('js/templates/*.hbs', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
