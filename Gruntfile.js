module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({

    // Concatenate CSS files
    concat: {
      dist: {
        src: [
          // _base.css required for .animated helper class
          'source/_base.css',
          'source/**/*.css'
        ]
        dest: 'animate.css'
      }
    },

    // Auto-prefix CSS properties using Can I Use?
    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'bb 10', 'android 3']
      },
      no_dest: {
        // File to output
        src: 'animate.css'
      },
    },

    // Minify CSS
    csso: {
      dist: {
        files: {
          // Output compressed CSS to style.min.css
          'animate.min.css': ['animate.css']
        }
      }
    },

    // Watch files for changes
    watch: {
      css: {
        files: [
          'source/**/*',
          '!node_modules'
        ],
        // Run Sass, autoprefixer, and CSSO
        tasks: ['concat', 'autoprefixer', 'csso'],
      }
    }

  });

  // Register our tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-csso');
  grunt.registerTask('default', ['watch']);
};