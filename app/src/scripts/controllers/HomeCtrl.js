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
        var data = new FormData();

        for (var i in $scope.uploadFiles) {
            data.append("file", $scope.uploadFiles[i]);
        }

        data.append("minutes", $scope.timeout);


        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://api.shareclock.dev/api/upload");
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        $scope.progressVisible = true;
        xhr.send(data);

        // FilesService.uploadFile(data).then(function(file) {
        //     console.log(file);
        //     getFiles()
        // }, function(error) {
        //     alert(error.data.message);
        // });
    }

    

    //METHODS FOR FILE UPLOAD

    $scope.setFiles = function(element) {
        $scope.$apply(function($scope) {
            // Turn the FileList object into an Array
            $scope.uploadFiles = [];
            for (var i = 0; i < element.files.length; i++) {
              $scope.uploadFiles.push(element.files[i]);
            }
            $scope.progressVisible = false;
        });
    };

    var uploadProgress = function(evt) {
        $scope.$apply(function(){
            if (evt.lengthComputable) {
                $scope.progress = Math.round(evt.loaded * 100 / evt.total);
            } else {
                $scope.progress = 'unable to compute';
            }
        });
    }

    var uploadComplete = function(evt) {
        /* This event is raised when the server send back a response */
        console.log("Upload Success!!");

        //RESET FORM
        document.getElementById("myForm").reset();
        $scope.progressVisible = false;

        //Refresh List
        getFiles();
    }

    var uploadFailed = function(evt) {
        alert("There was an error attempting to upload the file.");
    }

    var uploadCanceled = function(evt) {
        alert("The upload has been canceled by the user or the browser dropped the connection.");
    }
}