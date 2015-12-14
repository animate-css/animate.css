// Utilities
var fs = require('fs');

// Gulp
var gulp = require('gulp');

// Gulp plugins
var gutil  = require('gulp-util');
var concat = require('gulp-concat');
var header = require('gulp-header');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

// Misc/global vars
var pkg    = JSON.parse(fs.readFileSync('package.json'));
var banner = [
  '@charset "UTF-8";\n',
  '/*!',
  ' * <%= name %> -<%= homepage %>',
  ' * Version - <%= version %>',
  ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
  ' *',
  ' * Copyright (c) <%= new Date().getFullYear() %> <%= author.name %>',
  ' */\n\n'
].join('\n');
var activatedAnimations = activateAnimations();

// ----------------------------
// Gulp task definitions
// ----------------------------

gulp.task('default', function() {
  runSequence('concatCSS', 'addHeader', 'prefixes', 'minifyCSS');
});

gulp.task('concatCSS', function() {
  return gulp.src(activatedAnimations)
    .pipe(concat('animate.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('addHeader', function() {
  return gulp.src('animate.css')
    .pipe(header(banner, pkg))
    .pipe(gulp.dest('./'));
});

gulp.task('prefixes', function() {
  return gulp.src('animate.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('minifyCSS', function() {
  return gulp.src('animate.css')
    .pipe(rename('animate.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('./'));
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

      for (file in files) {
        if (files.hasOwnProperty(file) && files[file]) {
          target.push('source/' + category + '/' + file + '.css');
          count += 1;
        }
      }
    }
  }

  if (!count) {
    gutil.log('No animations activated.');
  } else {
    gutil.log(count + (count > 1 ? ' animations' : ' animation') + ' activated.');
  }

  return target;
};
