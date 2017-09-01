var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var mailSender = require('./mailSender');
//var cvUploader = require('./cvUploader');
var Twitter = require('twitter');
var viewDir = 'app';
var app = express();
var apikeys = require('./apikeys');

var twitterClient = new Twitter({
    consumer_key: apikeys.TWITTER_CONSUMER_KEY,
    consumer_secret: apikeys.TWITTER_CONSUMER_SECRET,
    access_token_key: apikeys.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: apikeys.TWITTER_ACCESS_TOKEN_SECRET
});
var params = {
    screen_name: '2_commit',
    count: 1,
    trim_user: true
};


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
app.get('/api/tweets', function (req, res) {
    twitterClient.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            res.send(tweets);
        }
    });

    // for (let tweet of tweets) {
    //     console.log(tweet.text);

    //     if (tweet.entities.media != undefined) {
    //         console.log(tweet.entities.media[0].media_url);
    //     }
    // }
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});