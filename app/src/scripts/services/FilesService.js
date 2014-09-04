'use strict';

module.exports = function($resource, $q) {

    console.log('FilesService Loaded');

    var URL = 'http://api.shareclock.dev/api/files/:fileId';

    var Files = $resource(URL, {}, {

        getFiles: {
            method: "GET"
        },

        remove: {
            method: "DELETE",
            params: {
                fileId: '@id'
            }
        }


    });

    this.getFiles = function() {
        console.log('FilesService.getFiles()');
        var deferred = $q.defer();

        Files.get({}, function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    this.removeFile = function(id) {
        console.log("FilesService.removeFile(" + id + ")");

        var deferred = $q.defer();

        Files.remove({
            fileId: id
        }, function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            deferred.reject(error);
        });
        return deferred.promise;
    }

    return this;
}