"use strict";

module.exports = function($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {

    console.log("MainRoutes Loaded");

    $locationProvider.html5Mode(true).hashPrefix("!");

    $stateProvider.state("Dashboard", {
        url: "/scaffold/dashboard",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/scaffold/dashboard.html",
                controller: "DashboardCtrl"
            }
        },
        data : { pageTitle: 'Dashboard' }

    }).state("Service", {
        url: "/service",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/service.html",
                controller: "MainCtrl"
            }
        },
        data : { pageTitle: 'Service' }

    }).state("Objects", {
        url: "/scaffold/objects",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/scaffold/objects.html",
                controller: "ObjectCtrl"
            }
        },
        data : { pageTitle: 'Objects' }

    }).state("Endpoints", {
        url: "/scaffold/endpoints",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/scaffold/endpoints.html",
                controller: "EndpointCtrl"
            }
        },
        data : { pageTitle: 'Endpoints' }

    }).state("Files", {
        url: "/files",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/shareclock/files.html",
                controller: "FilesCtrl"
            }
        },
        data : { pageTitle: 'ShareClock Files' }

    });;


}