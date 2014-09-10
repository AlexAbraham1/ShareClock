'use strict';

module.exports = function($scope, $sce, FilesService, $stateParams, $modal) {

    // create a message to display in our view
    console.log('FileCtrl Loaded');

    var getFile = function() 
    {
        console.log('FileCtrl.getFile');
        FilesService.getFile($stateParams.id).then(function(file) {

            $scope.file = file;

            var filetype = file.filetype;

            redirect(filetype);

            $scope.filePath = 'http://api.shareclock.dev' + file.path;  

            $scope.file.size = convertSize($scope.file.size, true);

            if (filetype == "video") setupVideoPlayer();

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

    // $scope.removeFile = function() 
    // {
    //     FilesService.removeFile($stateParams.id).then(function(file) {
    //         $scope.goToHome();
    //     }, function(error) {
    //         alert(error.data.message);
    //     });
    // }

    var redirect = function(type)
    {
        if ($stateParams.filetype != type) {
            var link = '/view/' + type + '/' + $stateParams.id;
            window.location.replace(link);
        } 
    }

    $scope.removeFileModal = function(file) {
        $scope.fileToRemove = file;

        var modal = $modal.open({
            scope: $scope,
            templateUrl: '/src/html/layouts/shareclock/files/modals/removeFile.html'
        });

        modal.result.then(function() {

        }, function() {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.removeFile = function(fileToRemove, $close) {
        FilesService.removeFile(fileToRemove.id).then(function(file) {
            $close('success');
            $scope.goToHome();
        }, function(error) {
            console.log(error.data.message);
        });
    };


    $scope.zipFileModal = function() {

        var modal = $modal.open({
            scope: $scope,
            templateUrl: '/src/html/layouts/shareclock/files/modals/zipFile.html'
        });

        modal.result.then(function() {

        }, function() {
            console.log('Modal dismissed at: ' + new Date());
        });

    }


    var convertSize = function(bytes, si) 
    {
        var thresh = si ? 1000 : 1024;
        if(bytes < thresh) return bytes + ' B';
        var units = si ? ['kB','MB','GB','TB','PB','EB','ZB','YB'] : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
        var u = -1;
        do {
            bytes /= thresh;
            ++u;
        } while(bytes >= thresh);
        return bytes.toFixed(1)+' '+units[u];
    };

    var setupVideoPlayer = function() 
    {
        $scope.currentTime = 0;
        $scope.totalTime = 0;
        $scope.state = null;
        $scope.volume = 1;
        $scope.isCompleted = false;
        $scope.API = null;

        $scope.onPlayerReady = function(API) {
            $scope.API = API;
        };

        $scope.config = {
            autoHide: false,
            autoHideTime: 3000,
            autoPlay: false,
            sources: [
                {src: $sce.trustAsResourceUrl($scope.filePath), type: $scope.file.data.type}
            ],
            transclude: true,
            theme: {
                url: "/release/styles/videogular/videogular.css"
            },
            plugins: {
                poster: {
                    url: 'http://api.shareclock.dev' + $scope.file.data.thumbnail
                }
            }
        };
    }

    
}