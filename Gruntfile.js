module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var concatAnim;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [ 'source/_base.css', 'source/**/*.css' ], // _base.css required for .animated helper class
        dest: 'animate.css'
      }
    },

    autoprefixer: { // https://github.com/nDmitry/grunt-autoprefixer
      options: {
        browsers: ['last 2 versions', 'bb 10']
      },
      no_dest: {
        src: 'animate.css' // output file
      }
    },

    cssmin: {
      minify: {
        src: ['animate.css'],
        dest: 'animate.min.css',
      }
    },

    banner: [
      '/*!',
      ' * <%= _.capitalize(pkg.name) %> -<%= pkg.homepage %>',
      ' * Version - <%= pkg.version %>',
      ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
      ' *',
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>',
      ' */',
    ].join('\n'),

    usebanner: {
      options: {
        position: 'replace',
        linebreak: false,
        replace: /\/\*!(\s+)?inject-banner(\s+)?\*\//
      },
      development: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          src: [ 'animate.css']
        }
      },
      production: {
        options: {
          banner: '\n<%= banner %>\n'
        },
        files: {
          src: ['animate.min.css']
        }
      }
    },

    watch: {
      css: {
        files: [ 'source/**/*', 'animate-config.json' ],
        tasks: ['default']
      }
    }
  });

  // fuction to perform custom task
  concatAnim = function () {
    var categories = grunt.file.readJSON('animate-config.json'),
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
      grunt.log.writeln('No animations activated.');
    } else {
      grunt.log.writeln(count + (count > 1 ? ' animations' : ' animation') + ' activated.');
    }

    grunt.config('concat', { 'animate.css': target });
    grunt.task.run('concat');
  };

  // register task
  grunt.registerTask('concat-anim', 'Concatenates activated animations', concatAnim); // custom task
  grunt.registerTask('default', ['concat-anim', 'autoprefixer', 'cssmin', 'usebanner']);
  grunt.registerTask('dev', ['watch']);
};
