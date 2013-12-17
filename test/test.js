'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('postprocess CSS with Myth', function () {
	var actual = grunt.file.read('test/tmp/preprocessed.css');
	var expected = grunt.file.read('test/fixture/expected.css');
	assert.equal(actual + '\n', expected);
});
