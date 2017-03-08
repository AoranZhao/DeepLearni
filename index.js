var express = require('express');
var app = express();
var config = require('./config');
var routing = require('./routing');

app.use('/', express.static('static'));

app.use('/api', routing.api_routing);

var port = process.env.PORT || config.port;
app.listen(port, function() {
	console.log('Listening on port ' + port);
})