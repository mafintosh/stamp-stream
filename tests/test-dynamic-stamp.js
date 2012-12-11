var assert = require('assert');
var stamp = require('../index');
var buffer = require('./buffer');

var i = 0;
var s = stamp(function() {
	return i++;
});

buffer(s, function(data) {
	assert.equal(data, '01\n12\n');
});

s.write('1');
s.write('\n');
s.write('2');
s.write('\n');
s.end();