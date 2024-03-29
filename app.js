var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// set for heroku deployment
var server = app.listen(process.env.PORT || 8440, function() {
	console.log('Express server listening on port ' + server.address().port);
});
