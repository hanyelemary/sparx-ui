module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    //file concatenation configuration
    concat: {
      css: {
        src: ['src/css/*.css', 'src/css/*/*.css'],
        dest: 'target/css/<%= pkg.name %>.css'
      }
    },

    //css minification configuration    
    cssmin: {
      target: {
        src: 'target/css/<%= pkg.name %>.css',
        dest: 'target/css/<%= pkg.name %>.min.css'
      }
    },

    // css lint configuration
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: {
        src: ['src/css/*.css', 'src/css/*/*.css']
      }
    },

    //optimize images for better performance
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/images'
        }]
      }
    },

    //remove the target directory
    clean: ['target']
  });

  // run using command: grunt clean
  grunt.loadNpmTasks('grunt-contrib-clean');

  // run using command: grunt csslint
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // run using command: grunt concat  
  grunt.loadNpmTasks('grunt-contrib-concat');

  // run using command: grunt cssmin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // run using command: grunt imagemin
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s) to run in order when executing: grunt.
  grunt.registerTask('default', [
    'clean',    
    'concat',
    'csslint',    
    'cssmin',
    'imagemin'
  ]);
};