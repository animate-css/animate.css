module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var concatAnim;

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [ 'source/_base.css', 'source/**/*.css' ], // _base.css required for .animated helper class
        dest: 'dn-animate.css'
      }
    },

    autoprefixer: { // https://github.com/nDmitry/grunt-autoprefixer
      options: {
        browsers: ['last 3 versions', 'bb 10', 'android 3']
      },
      no_dest: {
        src: 'dn-animate.css' // output file
      }
    },

    cssmin: {
      minify: {
        src: ['dn-animate.css'],
        dest: 'dn-animate.min.css',
      }
    },

    watch: {
      css: {
        files: [ 'source/**/*', 'dn-animate-config.json' ],
        tasks: ['default']
      }
    }

  });

  // fuction to perform custom task
  concatAnim = function () {

    var categories = grunt.file.readJSON('dn-animate-config.json'),
      category, files, file,
      target = [ 'source/_base.css' ],
      count = 0;

    for ( category in categories ) {
      if ( categories.hasOwnProperty(category) ) {
        files = categories[category]
        for (file in files) {
          if ( files.hasOwnProperty(file) && files[file] ) {
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

    grunt.config('concat', { 'dn-animate.css': target });
    grunt.task.run('concat');

  };

  // register task
  grunt.registerTask('concat-anim', 'Concatenates activated animations', concatAnim); // custom task
  grunt.registerTask('default', ['concat-anim', 'autoprefixer', 'cssmin']);
  grunt.registerTask('dev', ['watch']);

};
