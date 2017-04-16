# grunt-myth [![Build Status](https://travis-ci.org/sindresorhus/grunt-myth.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-myth)

> [Myth](https://github.com/segmentio/myth) - Postprocessor that polyfills CSS

*Issues with the output should be reported on the Myth [issue tracker](https://github.com/segmentio/myth).*


## Install

```
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

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	myth: {
		options: {
			prefixFile: 'src/root.css'
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

Type: `boolean`<br>
Default: `false`

Embed a Source Map.

### features

Type: `object`<br>
Default: `{}`

Disable specific Myth [features](https://github.com/segmentio/myth#nodejs).

### prefixFile

Type: `string`  
Default: `null`

Add a prefix file to every handled file


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
