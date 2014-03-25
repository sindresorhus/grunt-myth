# grunt-myth [![Build Status](https://travis-ci.org/sindresorhus/grunt-myth.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-myth)

> [Myth](https://github.com/segmentio/myth) - Postprocessor that polyfills CSS

*Issues with the output should be reported on the Myth [issue tracker](https://github.com/segmentio/myth).*


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```bash
$ npm install --save-dev grunt-myth
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-myth');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*


[grunt]: http://gruntjs.com
[Getting Started]: http://gruntjs.com/getting-started


### Example

```js
grunt.initConfig({
	myth: {											// task
		options: {									// options
			sourcemap: true
		},
		dist: {										// target
			files: {								// dictionary of files
				'dist/app.css': 'src/app.css'		// 'destination': 'source'
			}
		}
	}
});

grunt.loadNpmTasks('grunt-myth');
grunt.registerTask('default', ['myth']);
```


### Options

#### sourcemap

Type: `boolean`  
Default: `false`

Embed a Source Map.


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
