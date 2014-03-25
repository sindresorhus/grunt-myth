'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		myth: {
			compile: {
				options: {
					sourcemap: true
				},
				files: {
					'test/tmp/preprocessed.css': 'test/fixture.css'
				}
			}
		},
		simplemocha: {
			test: {
				src: 'test/*.js'
			}
		},
		clean: {
			test: ['test/tmp']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['clean', 'myth', 'simplemocha', 'clean']);
};
