var gulp = require('gulp'),
    //Browserify = require('browserify-gulp').default,
    path = require('path'),
    webpack = require('webpack');

var webpackConfig = {
    entry: './js/main.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.hbs$/, loader: 'handlebars-loader'}
        ]
    },
    externals: {
        "jquery": "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};

gulp.task('scripts', function() {
    webpack(webpackConfig).run(function() {});
    /*
    return gulp.src('js/main.js')
        .pipe(webpack())
        .pipe(gulp.dest('build/js'))
    */
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('js/templates/*.hbs', ['scripts']);
});

gulp.task('default', ['scripts'/*, 'watch'*/]);
