var assert = require('assert');
var stamp = require('../index');
var buffer = require('./buffer');
var s = stamp('hello ');

buffer(s, function(data) {
	assert.equal(data, 'hello world\n');
});

s.write('wor');
s.write('ld\n');
s.end();