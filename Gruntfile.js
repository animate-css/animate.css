module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    sass: {
      dist: {
        files: {
          'dist/animate.css': 'source/animate.scss',
        },
      },
    },

    autoprefixer: { // https://github.com/nDmitry/grunt-autoprefixer
      options: {
        browsers: ['last 3 versions', 'bb 10', 'android 3']
      },
      no_dest: {
        src: 'dist/animate.css' // output file
      }
    },

    cssmin: {
      minify: {
        src: ['dist/animate.css'],
        dest: 'dist/animate.min.css',
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
  grunt.registerTask('dev', ['default', 'watch']);

};
