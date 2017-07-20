var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var mailSender = require('./mailSender');
//var cvUploader = require('./cvUploader');
var viewDir = 'app';

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, viewDir)));

app.post('/api/mail', function (req, res) {
    var voornaam = req.body.voornaam;
    var achternaam = req.body.achternaam;
    var email = req.body.email;
    var bericht = req.body.bericht;

    res.send(mailSender.sendEmail(voornaam, achternaam, email, bericht));
});
app.post('/api/cv', function (req, res) {
    //res.send(cvUploader.sendCv());
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});