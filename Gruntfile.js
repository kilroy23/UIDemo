module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'public/css/styles.css' : 'public/css/scss/styles.scss'
				}
			}
		},

    autoprefixer: {
      dist: {
        files: {
          'public/css/styles.css' : 'public/css/styles.css'
        }
      }
    },

		watch: {
			css: {
				files: 'public/css/scss/*.scss',
				tasks: ['sass', 'autoprefixer']
			}
		}

	});

  grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);

}
