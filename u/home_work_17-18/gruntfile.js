module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: ['src/js/*.js'],
                dest: 'public/js/script.main.js'
            },
            css: {
                options: {
                    separator: ''
                },
                src: ['src/css/*.css'],
                dest: 'public/css/style.css'
            }
        },
        uglify: {
            js: {
                src: 'public/js/script.main.js',
                dest: 'public/js/script.main.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    src: 'public/css/style.css',
                    dest: 'public/css/style.min.css'
                }]
            }
        }
    });

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);	//	$ grunt


};