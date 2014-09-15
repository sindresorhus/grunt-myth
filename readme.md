# grunt-myth [![Build Status](https://travis-ci.org/sindresorhus/grunt-myth.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-myth)

> [Myth](https://github.com/segmentio/myth) - Postprocessor that polyfills CSS

*Issues with the output should be reported on the Myth [issue tracker](https://github.com/segmentio/myth).*


## Install

```sh
$ npm install --save-dev grunt-myth
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	myth: {
		options: {
			sourcemap: true
		},
		dist: {
			files: {
				'dist/app.css': 'src/app.css'
			}
		}
	}
});

grunt.registerTask('default', ['myth']);
```


## Options

### sourcemap

Type: `boolean`
Default: `false`

Embed a Source Map.

### features

Type: `object`
Default: `{}`

Disable or enable specific myth features. Omitted features are enabled
by default. Myth's feature list can be found in the [Node.js section of
their README](https://github.com/segmentio/myth#nodejs).

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
