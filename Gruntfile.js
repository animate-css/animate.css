module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var concatAnim;

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'animate.css': 'source/animate.scss',
        },
      },
    },

    autoprefixer: { // https://github.com/nDmitry/grunt-autoprefixer
      options: {
        browsers: ['last 3 versions', 'bb 10', 'android 3']
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

    watch: {
      css: {
        files: [ 'source/**/*' ],
        tasks: ['default']
      }
    }

  });

  // register task
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('dev', ['watch']);

};
