var azure = require('azure-storage');
var apiKeys = require('./apikeys');
var fileService = azure.createFileService(apiKeys.AZURE_STORAGE_CONNECTION_STRING);;

fileService.createFileFromLocalFile('taskshare', 'taskdirectory', 'taskfile', 'task1-upload.txt', function (error, result, response) {
    if (!error) {
        console.log('succes');
    } else {
        console.log(error);
    }
});