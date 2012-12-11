# Stamp-Stream

A through stream that stamps all incoming lines of data with a message and emits it back out

	npm install stamp-stream

## Usage

Usage is simple

``` js
var stamp = require('stamp-stream');
var stream = stamp('hello ');

stream.pipe(process.stdout); // "hello world\n" is printed

stream.write('wor');
stream.write('ld\n');
```

You can make dynamic stamps as well by passing in a function instead

``` js
var lines = 0;
var stream = stamp(function() {
	return (lines++)+' '; // prefix with line number
});

stream.pipe(process.stdout); // "0 first\n1 second\n2 third\n" is printed

stream.write('first\n');
stream.write('seco')
stream.write('nd\nthird\n');
```

Stamp-Stream can be useful to stamp output from an application with timestamp or similar.
Assume we have a file called `stamp.js`

``` js
var stamp = require('stamp-stream');

process.stdin
	.pipe(stamp(function() {
		return new Date().toGMTString()+' ';
	}))
	.pipe(process.stdout);
process.stdin.resume();
```

If we now call `node my-app.js | node stream.js` all log messages from `my-app.js` would be prefixed by a timestamp.

## License

MIT
