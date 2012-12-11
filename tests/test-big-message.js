var assert = require('assert');
var stamp = require('../index');
var buffer = require('./buffer');
var s = stamp('hello ');

buffer(s, function(data) {
	assert.equal(data, 'hello world\nhello world1\nhello world2\nhello world3\nhello world4\nhello world5\n');
});

s.write('world\nworld1\nworld2\nworld3\nworld4\nworld5\n');
s.end();