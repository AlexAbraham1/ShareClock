'use strict';

require("../../vendor/angular/angular");
require("../../vendor/angular-resource/angular-resource");
require("../../vendor/angular-route/angular-route");
require("../../vendor/angular-animate/angular-animate");
require("../../vendor/angular-sanitize/angular-sanitize");
require("../../vendor/angular-ui-router/release/angular-ui-router");
require("../../vendor/ngQuickDate/dist/ng-quick-date");
require("./modules/cookies");
require("../../vendor/ng-prettyjson/dist/ng-prettyjson.min");
require("../../vendor/angular-bootstrap/ui-bootstrap");
require("../../vendor/angular-bootstrap/ui-bootstrap-tpls");
require("../../vendor/angular-upload/angular-upload");
require("../../vendor/colorbox/colorbox");
require("../../vendor/videogular/videogular");
require("../../vendor/videogular-buffering/buffering");
require("../../vendor/videogular-controls/controls");
require("../../vendor/videogular-overlay-play/overlay-play");


console.log("app.js Loaded");

var dateLocalizer = angular.module('dateLocalizeFilter', []).filter('dateLocalize', function() {
    return function(utcDate) {
        var dt = new Date(utcDate + 'Z').getTime();
        return dt;
    }
});

var shareclock = angular.module('ShareClock', ['ngRoute', 'ui.router', 'ngAnimate', 'ngSanitize', 'ngResource', 'ngQuickDate', 'dateLocalizeFilter', 'cookies', 'ngPrettyJson', 'ui.bootstrap', 'lr.upload', "com.2fdevs.videogular", "com.2fdevs.videogular.plugins.controls", "com.2fdevs.videogular.plugins.overlayplay", "com.2fdevs.videogular.plugins.buffering"]);


//CONFIG
shareclock.config(require("./routes/MainRoutes"));



//DIRECTIVES
shareclock.directive('updateTitle', ["$rootScope", "$timeout", require('./directives/UpdateTitle')]);

shareclock.directive('colorboximage', ["$compile", "$rootScope", require('./directives/ColorboxImage')]);

shareclock.directive('colorboxpdf', ["$compile", "$rootScope", require('./directives/ColorboxPDF')]);




//Controllers
shareclock.controller('ObjectCtrl', ["$scope", "ObjectService", "$rootScope", "$cookies", require("./controllers/ObjectCtrl")]);
shareclock.controller('EndpointCtrl', ["$scope", "EndpointService", "$rootScope", "$cookies", require("./controllers/EndpointCtrl")]);

shareclock.controller('DashboardCtrl', ["$scope", "DashboardService", "$rootScope", "$cookies", "EndpointTestService", "ObjectService", "EndpointService", "$modal", "$timeout", require("./controllers/DashboardCtrl")]);

shareclock.controller('HomeCtrl', ["$scope", "FilesService", "upload", require("./controllers/HomeCtrl")]);
shareclock.controller('FileCtrl', ["$scope", "$sce", "FilesService", "$stateParams", "$modal", require("./controllers/FileCtrl")]);



//SERVICES
shareclock.service('DashboardService', ["$resource", "$q", "$rootScope", require("./services/DashboardService")]);
shareclock.service('ObjectService', ["$resource", "$q", "$rootScope", require("./services/ObjectService")]);
shareclock.service('EndpointService', ["$resource", "$q", "$rootScope", require("./services/EndpointService")]);
shareclock.service('EndpointTestService', ["$resource", "$q", "$rootScope", "$http", require("./services/EndpointTestService")]);

shareclock.service('FilesService', ["$resource", "$q", "TransformRequestAsFormPost", require("./services/FilesService")]);


//FACTORIES
shareclock.factory('TransformRequestAsFormPost', [require("./factories/TransformRequestAsFormPost")]);



angular.bootstrap(document, ['ShareClock']);