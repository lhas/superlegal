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
		  javascripts: {
		    src: [ 'dist/**/*.js', '!dist/**/*.min.js' ]
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
		      'dist/assets/js/app.min.js': [ 'src/assets/js/**/*.js' ]
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
		    tasks: [ 'newer:stylus' ]
		  },
		  scripts: {
		    files: 'src/**/*.js',
		    tasks: [ 'newer:uglify' ]
		  },
		  jade: {
		    files: 'src/**/*.jade',
		    tasks: [ 'jade' ]
		  },
		  copy: {
		    files: [ 'src/**', '!src/**/*.styl', '!src/**/*.coffee', '!src/**/*.jade' ],
		    tasks: [ 'clean', 'copy' ]
		  },
		  options: {
		  	livereload: true,
		  }
		},
		imagemin: {
		    png: {
		      options: {
		        optimizationLevel: 7
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'src/assets/img/',
		          src: ['**/*.png'],
		          // Could also match cwd line above. i.e. project-directory/img/
		          dest: 'dist/assets/img/',
		          ext: '.png'
		        }
		      ]
		    },
		    jpg: {
		      options: {
		        progressive: true
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'src/assets/img/',
		          src: ['**/*.jpg'],
		          // Could also match cwd. i.e. project-directory/img/
		          dest: 'dist/assets/img/',
		          ext: '.jpg'
		        }
		      ]
		    }
	  },
	  connect: {
	    server: {
	      options: {
	      	livereload: true,
	        port: 9001,
	        base: 'dist/',
	        middleware: function(connect, options, middlewares) {
	            var modRewrite = require('connect-modrewrite');

	            // enable Angular's HTML5 mode
	            middlewares.unshift(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']));

	            return middlewares;
          	}
	      }
	    }
	  }
	});

  	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-contrib-clean');
  	grunt.loadNpmTasks('grunt-contrib-stylus');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-jade');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-contrib-imagemin');
  	grunt.loadNpmTasks('grunt-contrib-connect');
  	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask("default", ['clean', 'copy', 'stylus', 'uglify', 'clean:javascripts', 'jade', 'imagemin', 'connect:server', 'watch']);
	grunt.registerTask("build", ['clean', 'copy', 'stylus', 'uglify', 'clean:javascripts', 'jade', 'imagemin']);
}