var azure = require('azure-storage');
var apiKeys = require('./apikeys');
var fileService = azure.createFileService(apiKeys.AZURE_STORAGE_CONNECTION_STRING);

module.exports = {
    sendCv: function () {
        fileService.createFileFromText('cvs', '', 'aoijaoija.txt', 'test', function (error, result, response) {
            return response;
            /*
            if (!error) {
                console.log(response);
            } else {
                console.log(error);
            }
            */
        });
    }
}