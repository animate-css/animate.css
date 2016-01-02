// Utilities
var fs = require('fs');

// Gulp
var gulp = require('gulp');

// Gulp plugins
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var header = require('gulp-header');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var minify = require('gulp-cssnano');
var rename = require('gulp-rename');

// Misc/global vars
var pkg = JSON.parse(fs.readFileSync('package.json'));
var activatedAnimations = activateAnimations();

// Task options
var opts = {
  destPath: './',
  concatName: 'animate.css',

  autoprefixer: {
    browsers: ['last 2 versions'],
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

gulp.task('default', function() {
  runSequence('createCSS', 'addHeader');
});

gulp.task('createCSS', function() {
  return gulp.src(activatedAnimations)
    .pipe(concat(opts.concatName))
    .pipe(autoprefixer(opts.autoprefixer))
    .pipe(gulp.dest(opts.destPath))
    .pipe(rename(opts.minRename))
    .pipe(minify({reduceIdents: {keyframes: false}}))
    .pipe(gulp.dest(opts.destPath));
});

gulp.task('addHeader', function() {
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
    target = [ 'source/_base.css' ],
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
