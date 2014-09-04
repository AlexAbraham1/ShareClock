'use strict';

module.exports = function($resource, $q, $rootScope) {

    console.log("MainService Loaded");

    var URL = 'http://api.scaffold.dev/:dataType';

    var formatTime = function(time) {
        var split = time.split(/[- :]/);
        var projectTime = new Date(split[0], split[1] - 1, split[2], split[3], split[4], split[5]);

        var currentTime = new Date();
        var timeSince = Math.round((currentTime.getTime() - projectTime.getTime()) / (1000 * 60 * 60 * 24));

        if (timeSince == 0) {
            return "Today";
        } else if (timeSince == 1) {
            return "1 Day Ago";
        } else {
            return timeSince + " Days Ago";
        }
    }

    var Objects = $resource(URL, {}, {

        getProjects: {
            method: "GET",
            params: {
                dataType: 'projects'
            }
        },

        getEndpoints: {
            method: "GET",
            params: {
                dataType: 'endpoints'
            }
        },

        getObjects: {
            method: "GET",
            params: {
                dataType: 'objects'
            }
        }

    });

    var format = function(project) {
        project.rename = rename;
        project.remove = remove;
        project.changeDescription = changeDescription;
        project.changeJSON = changeJSON;

        project.created_at = formatTime(project.created_at);
        project.updated_at = formatTime(project.updated_at);

        return project;
    }

    this.getProjects = function() {
        console.log("DashboardService.getProjects");

        var deferred = $q.defer();

        Objects.getProjects({}, function(response) {
            for (var i = 0; i < response.data.length; i++) {
                response.data[i] = format(response.data[i]);
            };

            deferred.resolve(response.data);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    this.getEndpoints = function() {
        console.log("DashboardService.getEndpoints");

        var deferred = $q.defer();

        Objects.getEndpoints({}, function(response) {
            for (var i = 0; i < response.data.length; i++) {
                response.data[i] = format(response.data[i]);
            };

            deferred.resolve(response.data);

        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    this.getObjects = function() {
        console.log("DashboardService.getObjects");

        var deferred = $q.defer();

        Objects.getObjects({}, function(response) {
            for (var i = 0; i < response.data.length; i++) {
                response.data[i] = format(response.data[i]);
            };

            deferred.resolve(response.data);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }


    var rename = function() {
        console.log("MainService.rename");
        var object = this;
        var newname = prompt("What would you like to rename the object to?");
        Tasks.rename({
            id: object.id,
            name: newname
        }, function() {
            $rootScope.$emit('afterModification');
        });
    };

    var changeDescription = function(newDescription) {
        console.log("MainService.changeDescription", newDescription);
        var object = this;
        Objects.changeDescription({
            id: object.id,
            description: newDescription
        }, function() {
            $rootScope.$emit('afterModification');
        });
    }

    var changeJSON = function(newJSON) {
        console.log("MainService.changeJSON", newJSON);
        var object = this;
        Objects.changeJSON({
            id: object.id,
            json: newJSON
        }, function() {
            $rootScope.$emit('afterModification');
        });
    }

    this.create = function(data) {
        console.log("MainService.create");
        var deferred = $q.defer();

        Objects.create(data, function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    var remove = function() {
        console.log("MainService.remove");
        var object = this;
        if (confirm("Do you really want to remove this object?")) {
            Objects.remove({
                taskId: object.id,
            }, function() {
                console.log(object.name + " removed");
                $rootScope.$emit('afterModification');
            });
        } else {
            console.log("Deletion Cancelled");
        }
    };

    return this;
}