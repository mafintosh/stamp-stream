module.exports = function(stream, fn) {
	var buf = '';

	stream.on('data', function(data) {
		buf += data;
	});
	stream.on('end', function() {
		fn(buf);
	});
};