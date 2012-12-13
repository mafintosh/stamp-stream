var assert = require('assert');
var stamp = require('../index');
var buffer = require('./buffer');
var s = stamp();

buffer(s, function(data) {
	assert.equal(data, 'world\n');
});

s.write('world\n');
s.end();