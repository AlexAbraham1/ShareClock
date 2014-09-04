'use strict';

module.exports = function($scope, FilesService) {

    // create a message to display in our view
    console.log('FilesCtrl Loaded');

    var getFiles = function() 
    {
        console.log('FilesCtrl.getFiles');
        FilesService.getFiles().then(function(files) {
            $scope.files = files;
            console.log($scope.files);
        });

    };    
    
    getFiles();



    $scope.viewFile = function(id)
    {
        window.location.href = 'http://api.shareclock.dev/files/' + id;
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
}