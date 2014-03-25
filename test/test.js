'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('postprocess CSS with Myth', function () {
	var actual = grunt.file.read('test/tmp/preprocessed.css');
	assert(/color: #a6c776;/.test(actual));
	assert(/sourceMappingURL/.test(actual));
});
