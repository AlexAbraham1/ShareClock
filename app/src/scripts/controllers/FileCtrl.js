'use strict';

module.exports = function($scope, FilesService, $stateParams, $modal) {

    // create a message to display in our view
    console.log('FileCtrl Loaded');

    var getFile = function() 
    {
        console.log('FileCtrl.getFile');
        FilesService.getFile($stateParams.id).then(function(file) {

            redirect(file.filetype);
                
            $scope.file = file;

            var filetype = file.filetype;

            $scope.filePath = 'http://api.shareclock.dev' + file.path;

            console.log(file);
            

        }, function(error) {
            alert(error.data.message);
        });

    };    
    
    getFile();

    $scope.goToHome = function()
    {
        window.location.href = "/";
    }

    $scope.shareFile = function()
    {
        console.log('SHARING FILE!!');
    }

    $scope.removeFile = function() 
    {
        FilesService.removeFile($stateParams.id).then(function(file) {
            $scope.goToHome();
        }, function(error) {
            alert(error.data.message);
        });
    }

    var redirect = function(type)
    {
        if ($stateParams.filetype != type) {
            var link = '/view/' + type + '/' + $stateParams.id;
            window.location.replace(link);
        } 
    }

    //PDF COLORBOX TEMPLATE
    $scope.pdfColorboxTemplate = '<object data={{filePath}} type="application/pdf" width="100%" height="100%">';

    
}