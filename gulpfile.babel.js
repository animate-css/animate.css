'use strict';
// Utilities
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
import browserSync from 'browser-sync';
const reload = browserSync.reload;
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var fs = require('fs');
// Gulp
var gulp = require('gulp');
// Gulp plugins
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var header = require('gulp-header');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
// Misc/global vars
var pkg = JSON.parse(fs.readFileSync('package.json'));
var activatedAnimations = activateAnimations();
// Task options
var opts = {
    destPath: './app/styles/',
    destPath1: './',
    concatName: 'animate.css',
    autoprefixer: {
        browsers: ['> 5%'],
        cascade: false
    },
    minRename: {
        suffix: '.min'
    },
    banner: [
        '@charset "UTF-8";\n',
        '/*!',
        ' * <%= name %> -<%= homepage %>',
        ' * Version - <%= version %>',
        ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
        ' *',
        ' * Copyright (c) <%= new Date().getFullYear() %> <%= author.name %>',
        ' */\n\n'
    ].join('\n')
};
// ----------------------------
// Gulp task definitions
// ----------------------------
gulp.task('serve', ['scripts', 'styles'], () => {
    browserSync({
        notify: false,
        // Customize the Browsersync console logging prefix
        logPrefix: 'WSK',
        // Allow scroll syncing across breakpoints
        scrollElementMapping: ['main', '.mdl-layout'],
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: ['.tmp', 'app'],
        port: 3000
    });
    gulp.watch(['app/**/*.html'], reload);
    gulp.watch(['app/styles/**/*.{scss,css}'], ['styles', reload]);
    gulp.watch(['app/scripts/**/*.js'], [/*'lint',*/ 'scripts']);
    gulp.watch(['app/images/**/*'], reload);
});
gulp.task('styles', () => {
    const AUTOPREFIXER_BROWSERS = [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ];
    // For best performance, don't add Sass partials to `gulp.src`
    return gulp.src([
        'app/styles/**/*.scss',
        'app/styles/**/*.css'
    ])
        .pipe($.newer('.tmp/styles'))
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            precision: 10
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('.tmp/styles'))
        // Concatenate and minify styles
        .pipe($.if('*.css', $.cssnano()))
        .pipe($.size({title: 'styles'}))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('dist/styles'));
});
gulp.task('scripts', () =>
        gulp.src([
            // Note: Since we are not using useref in the scripts build pipeline,
            //       you need to explicitly list your scripts here in the right order
            //       to be correctly concatenated
            './app/scripts/main.js',
            './app/scripts/test/es6.js',
            './app/scripts/test/es6-string-template.js',
            './app/scripts/test/map-collection.js',
            './app/scripts/test/proxy.js',
            './app/scripts/test/ClientService.js',
            './app/scripts/test/main.js'

            // Other scripts
        ], {base: './app/scripts'})
            .pipe($.newer('.tmp/scripts'))
            .pipe($.sourcemaps.init())
            .pipe($.babel())
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest('.tmp/scripts'))
            .pipe($.concat('main.min.js'))
            .pipe($.uglify({preserveComments: 'some'}))
            // Output files
            .pipe($.size({title: 'scripts'}))
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest('dist/scripts'))
);
gulp.task('serve:dist', ['default'], () =>
        browserSync({
            notify: false,
            logPrefix: 'WSK',
            // Allow scroll syncing across breakpoints
            scrollElementMapping: ['main', '.mdl-layout'],
            // Run as an https by uncommenting 'https: true'
            // Note: this uses an unsigned certificate which on first access
            //       will present a certificate warning in the browser.
            // https: true,
            server: 'dist',
            port: 3001
        })
);
gulp.task('default', function () {
    runSequence('createCSS', 'addHeader');
});
gulp.task('createCSS', function () {
    return gulp.src(activatedAnimations)
        .pipe(concat(opts.concatName))
        .pipe(postcss([
            autoprefixer(opts.autoprefixer)
        ]))
        .pipe(gulp.dest(opts.destPath))
        .pipe(gulp.dest(opts.destPath1))
        .pipe(postcss([
            autoprefixer(opts.autoprefixer),
            cssnano({reduceIdents: {keyframes: false}})
        ]))
        .pipe(rename(opts.minRename))
        .pipe(gulp.dest(opts.destPath))
        .pipe(gulp.dest(opts.destPath1));
});
gulp.task('addHeader', function () {
    return gulp.src('*.css')
        .pipe(header(opts.banner, pkg))
        .pipe(gulp.dest(opts.destPath));
});
// ----------------------------
// Helpers/functions
// ----------------------------
// Read the config file and return an array of the animations to be activated
function activateAnimations() {
    var categories = JSON.parse(fs.readFileSync('animate-config.json')),
        category, files, file,
        target = ['source/_base.css'],
        count = 0;
    for (category in categories) {
        if (categories.hasOwnProperty(category)) {
            files = categories[category];
            for (var i = 0; i < files.length; ++i) {
                target.push('source/' + category + '/' + files[i] + '.css');
                count += 1;
            }
        }
    }
    if (!count) {
        gutil.log('No animations activated.');
    } else {
        gutil.log(count + (count > 1 ? ' animations' : ' animation') + ' activated.');
    }
    return target;
}
