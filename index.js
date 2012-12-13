var through = require('through');

module.exports = function(tag) {
	if (!tag) return through();

	if (typeof tag !== 'function') {
		return module.exports(function() {
			return tag;
		});
	}

	var startOfLine = true;

	var slice = function(buffer, from, to) {
		return (from === 0 && to === buffer.length) ? buffer : buffer.slice(from, to);
	};

	return through(function(data) {
		if (startOfLine) {
			startOfLine = false;
			this.queue(tag());
		}

		var str = data.toString();
		var newline;
		var offset = 0;

		while ((newline = str.indexOf('\n', offset)) > -1) {
			this.queue(slice(data, offset, newline+1));
			offset = newline+1;
			if (offset < data.length) this.queue(tag());
		}

		if (offset < data.length) {
			this.queue(slice(data, offset, data.length));
		} else {
			startOfLine = true;
		}
	});
};