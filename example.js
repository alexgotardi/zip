var zip = require('./API');

var archive = new zip('test.zip');

archive.add('API.js', 'API.js');

archive.end(function() {
	console.log('end');
});