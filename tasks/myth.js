'use strict';
var eachAsync = require('each-async');
var myth = require('myth');

module.exports = function (grunt) {
	grunt.registerMultiTask('myth', 'Postprocess CSS with Myth', function () {
		eachAsync(this.files, function (el, i, next) {
			grunt.file.write(el.dest, myth(grunt.file.read(el.src)));
			next();
		}, this.async());
	});
};
