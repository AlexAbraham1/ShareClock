'use strict';

module.exports = function($scope, FilesService) {

    // create a message to display in our view
    console.log('HomeCtrl Loaded');

    var getFiles = function() 
    {
        console.log('HomeCtrl.getFiles');
        FilesService.getFiles().then(function(files) {
            $scope.files = files;
            console.log($scope.files);
        });

    };    
    
    getFiles();

    $scope.viewFile = function(id, filetype)
    {
        window.location.href = '/view/' + filetype + '/'  + id;
    }

    $scope.removeFile = function(id) 
    {
        FilesService.removeFile(id).then(function(file) {
            console.log(file);
            getFiles()
        }, function(error) {
            alert(error.data.message);
        });
    }

    $scope.uploadFile = function()
    {
        var data = {
            file: $scope.file,
            timeout: $scope.timeout
        }

        FilesService.uploadFile(data).then(function(file) {
            console.log(file);
            getFiles()
        }, function(error) {
            alert(error.data.message);
        });
    }
}