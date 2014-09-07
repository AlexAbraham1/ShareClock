'use strict';

module.exports = function($resource, $q, TransformRequestAsFormPost) {

    console.log('FilesService Loaded');

    var URL = 'http://api.shareclock.dev/api/:foo/:fileId';

    var Files = $resource(URL, {}, {

        getFiles: {
            method: "GET",
            params: {
                foo: 'files'
            }
        },

        getFile: {
            method: "GET",
            params: {
                foo: 'files',
                fileId: '@id'
            }
        },

        upload: {
            method: "POST",
            transformRequest: TransformRequestAsFormPost,
            params: {
                foo: 'upload'
            }
        },

        remove: {
            method: "DELETE",
            params: {
                foo: 'files',
                fileId: '@id'
            }
        }


    });

    this.getFiles = function() {
        console.log('FilesService.getFiles()');
        var deferred = $q.defer();

        Files.getFiles({}, function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    this.getFile = function(id) {
        console.log('FilesService.getFile()');
        var deferred = $q.defer();

        Files.getFile({fileId: id}, function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    this.uploadFile = function(data) {
        console.log('FilesService.uploadFile()');
        var deferred = $q.defer();

        Files.upload(data, function(response) {
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