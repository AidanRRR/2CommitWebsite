/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var viewDir = 'app';

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, viewDir)));

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});




/*
var express = require('express');
//var logger = require('morgan');
var path = require('path');
var app = express();
var viewDir = 'app';

// log requests
//app.use(logger('dev'));

app.use(express.static(path.join(__dirname, viewDir)));

app.listen(3000);
console.log('listening on port 3000');
*/