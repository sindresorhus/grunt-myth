'use strict';
var eachAsync = require('each-async');
var myth = require('myth');

module.exports = function (grunt) {

	grunt.registerMultiTask('myth', 'Postprocess CSS with Myth', function () {

		var options = this.options();
		var execute = function ( dest, src, options ) {
			grunt.file.write( dest, myth( grunt.file.read( src ), options ) );
		};

		eachAsync( this.files, function ( el, i, next ) {

			var localOptions = options;

			localOptions.source = el.src[ 0 ];

			if ( el.src[0][ el.src[0].length - 1 ] === '/' ) {

				grunt.file.recurse( el.src[0], function callback( abspath, rootdir, subdir, filename ) {

					var localDest = el.dest + filename;
					var localSrc = abspath;

					localOptions.source = localSrc;

					execute( localDest, localSrc, localOptions );

				} );

			} else {
				execute( el.dest, el.src[ 0 ], localOptions );
			}

			next();

		}, this.async());

	});

};
