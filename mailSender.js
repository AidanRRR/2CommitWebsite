var helper = require('sendgrid').mail;
var toEmail = new helper.Email('aidan.rypens@hotmail.com');
// api key with only email sending rights
var apiKey = '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';

var sg = require('sendgrid')(apiKey);

module.exports = {
    sendEmail: function (voornaam, achternaam, email, bericht) {
        var fromEmail = new helper.Email(email);
        var content = new helper.Content('text/plain', bericht);
        var subject = 'Mail van ' + voornaam + " " + achternaam + " (van 2commit.be)";
        var mail = new helper.Mail(fromEmail, subject, toEmail, content);

        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });

        sg.API(request, function (error, response) {
            if (error) {
                console.log('Error response received');
                return error;
            }
            //console.log(response.statusCode);
            //console.log(response.body);
            //console.log(response.headers);

            return response.body;
        });
    },
};