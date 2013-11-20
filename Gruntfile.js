module.exports = function(grunt) {

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

  // Default task(s) to run in order when executing: grunt.
  grunt.registerTask('default', [
    'clean',    
    'concat',
    'csslint',    
    'cssmin'
  ]);
};