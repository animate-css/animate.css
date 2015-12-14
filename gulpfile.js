// Utilities
var fs = require('fs');

// Gulp
var gulp = require('gulp');

// Gulp plugins
var gutil  = require('gulp-util');
var concat = require('gulp-concat');

// Misc/global vars
var pkg    = JSON.parse(fs.readFileSync('package.json'));
var banner = [
  '/*!',
  ' * <%= name %> -<%= homepage %>',
  ' * Version - <%= version %>',
  ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
  ' *',
  ' * Copyright (c) <%= new Date().getFullYear() %> <%= author.name %>',
  ' */',
].join('\n');

// Read the config file and return an array of the animations to be activated
var activatedAnimations = function () {
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

gulp.task('default', function() {

});

gulp.task('concatCSS', function() {
  return gulp.src(activatedAnimations)
    .pipe(concat('animate.css'))
    .pipe(gulp.dest('./'));
});
