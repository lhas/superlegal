module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
	      build: {
	        cwd: 'src',
	        // ignore views/ folder, .styl files, .jade files
	        src: [ '**', '!**/views/**', '!**/*.styl', '!**/*.jade'  ],
	        dest: 'dist',
	        expand: true
	      },
	    },
	    clean: {
		  build: {
		    src: [ 'dist' ]
		  },
		  stylesheets: {
		    src: [ 'dist/**/*.css', '!dist/assets/css/app.min.css' ]
		  },
		  scripts: {
		    src: [ 'dist/**/*.js', '!dist/assets/js/app.min.js' ]
		  },
		},
		stylus: {
		  build: {
		    files: [{
		      expand: true,
		      cwd: 'src/assets/css',
		      src: [ '**/*.styl' ],
		      dest: 'dist/assets/css',
		      ext: '.min.css'
		    }]
		  }
		},
		uglify: {
		  build: {
		    files: {
		      'dist/assets/js/app.min.js': [ 'src/**/*.js' ]
		    }
		  }
		},
		jade: {
		  compile: {
		    files: [{
		      expand: true,
		      cwd: 'src/views',
		      src: [ '**/*.jade' ],
		      dest: 'dist',
		      ext: '.html'
		    }]
		  }
		},
		watch: {
		  stylesheets: {
		    files: 'src/**/*.styl',
		    tasks: [ 'stylus' ]
		  },
		  scripts: {
		    files: 'src/**/*.js',
		    tasks: [ 'uglify' ]
		  },
		  jade: {
		    files: 'src/**/*.jade',
		    tasks: [ 'jade' ]
		  },
		  copy: {
		    files: [ 'source/**', '!source/**/*.styl', '!source/**/*.coffee', '!source/**/*.jade' ],
		    tasks: [ 'copy', 'clean:stylesheets', 'clean:scripts' ]
		  },
		  options: {
		  	livereload: true,
		  }
		}
	});

  	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-contrib-clean');
  	grunt.loadNpmTasks('grunt-contrib-stylus');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-jade');
  	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("default", ['clean', 'copy', 'stylus', 'uglify', 'jade', 'clean:scripts', 'watch']);
	grunt.registerTask("build", ['clean', 'copy', 'stylus', 'uglify', 'jade', 'clean:scripts']);
}