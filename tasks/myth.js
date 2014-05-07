'use strict';
var eachAsync = require('each-async');
var myth = require('myth');

module.exports = function (grunt) {
	grunt.registerMultiTask('myth', 'Postprocess CSS with Myth', function () {
		var options = this.options();

		eachAsync(this.files, function (el, i, next) {
			options.source = el.src[0];
			grunt.file.write(el.dest, myth(grunt.file.read(el.src[0]), options));
			next();
		}, this.async());
	});
};
