'use strict';

var listApp = angular.module('listApp', ['ngRoute', 'ngResource']);

// // configure our routes
// listApp.config(function($routeProvider) {
// 	$routeProvider

// 		// route for the home page
// 		.when('/', {
// 			templateUrl : 'pages/home.html',
// 			controller  : 'mainController'
// 		})

// 		// route for the about page
// 		.when('/about', {
// 			templateUrl : 'pages/about.html',
// 			controller  : 'aboutController'
// 		})

// 		// route for the contact page
// 		.when('/contact', {
// 			templateUrl : 'pages/contact.html',
// 			controller  : 'contactController'
// 		});
// 	});

// create the controller and inject Angular's $scope


listApp.controller('MainCtrl', function($scope, MainService) {

	// create a message to display in our view
	console.log('MainCtrl Loaded');

	var getFiles = function() 
	{
        console.log('MainCtrl.getFiles');
        MainService.getFiles().then(function(files) {
            $scope.files = files;
            console.log($scope.files);
        });

    };    
    
    getFiles();



    $scope.viewFile = function(id)
    {
    	window.location.href = 'http://shareclock.dev/files/' + id;
    }

    $scope.removeFile = function(id) 
    {
    	MainService.removeFile(id).then(function(file) {
            console.log(file);
            getFiles()
        }, function(error) {
            alert(error.data.message);
        });
    }
});

listApp.service('MainService', function($resource, $q) {
	console.log('MainService Loaded');

	var URL = 'http://shareclock.dev/api/files/:fileId';

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
		console.log('MainService.getFiles()');
		var deferred = $q.defer();

        Files.get({}, function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	this.removeFile = function(id) {
        console.log("MainService.removeFile(" + id + ")");

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
});