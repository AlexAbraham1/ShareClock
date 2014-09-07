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


    //IMAGE DISPLAY MODAL
    $scope.imageModal = function() {

        var modal = $modal.open({
            scope: $scope,
            templateUrl: '/src/html/layouts/shareclock/files/modals/imageModal.html',
        });

        modal.result.then(function() {

        }, function() {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    
}