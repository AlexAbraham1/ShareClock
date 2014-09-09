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

    }).state("Home", {
        url: "/",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/shareclock/home.html",
                controller: "HomeCtrl"
            }
        },
        data : { pageTitle: 'ShareClock Home' }

    }).state("ImageView", {
        url: "/view/{filetype:image}/{id:[0-9]+}",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/shareclock/files/image.html",
                controller: "FileCtrl"
            }
        },
        data : { pageTitle: 'ShareClock Image' }

    }).state("PDFView", {
        url: "/view/{filetype:pdf}/{id:[0-9]+}",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/shareclock/files/pdf.html",
                controller: "FileCtrl"
            }
        },
        data : { pageTitle: 'ShareClock PDF' }

    }).state("ZipView", {
        url: "/view/{filetype:zip}/{id:[0-9]+}",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/shareclock/files/zip.html",
                controller: "FileCtrl"
            }
        },
        data : { pageTitle: 'ShareClock ZIP' }
    
    }).state("OtherView", {
        url: "/view/{filetype:other}/{id:[0-9]+}",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/shareclock/files/other.html",
                controller: "FileCtrl"
            }
        },
        data : { pageTitle: 'ShareClock Other' }
    
    })

    //MAKE SURE THE "OTHERWISE" STATE IS AT BOTTOM
    .state("otherwise", {
        url: "*path",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/shareclock/404.html"
            }
        },
        data : { pageTitle: 'ShareClock 404' }
    });


}