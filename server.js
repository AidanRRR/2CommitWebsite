/**
 * Module dependencies.
 */

var express = require('express');
//var logger = require('morgan');
var path = require('path');
var app = express();
var viewDir = 'app';

// log requests
//app.use(logger('dev'));

app.use(express.static(path.join(__dirname, viewDir)));

app.listen(8080);
console.log('listening on port 8080');