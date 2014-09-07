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

console.log("app.js Loaded");

var dateLocalizer = angular.module('dateLocalizeFilter', []).filter('dateLocalize', function() {
    return function(utcDate) {
        var dt = new Date(utcDate + 'Z').getTime();
        return dt;
    }
});

var shareclock = angular.module('ShareClock', ['ngRoute', 'ui.router', 'ngAnimate', 'ngSanitize', 'ngResource', 'ngQuickDate', 'dateLocalizeFilter', 'cookies', 'ngPrettyJson', 'ui.bootstrap', 'lr.upload']);


shareclock.directive('updateTitle', function($rootScope, $timeout) {
  return {
    link: function(scope, element) {

      var listener = function(event, toState, toParams, fromState, fromParams) {
        var title = 'ShareClock';
        if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;
        // Set asynchronously so page changes before title does
        $timeout(function() {
          element.text(title);
        });
      };

      $rootScope.$on('$stateChangeStart', listener);
    }
  }
});


shareclock.config(require("./routes/MainRoutes"));


shareclock.controller('ObjectCtrl', ["$scope", "ObjectService", "$rootScope", "$cookies", require("./controllers/ObjectCtrl")]);
shareclock.controller('EndpointCtrl', ["$scope", "EndpointService", "$rootScope", "$cookies", require("./controllers/EndpointCtrl")]);

shareclock.controller('DashboardCtrl', ["$scope", "DashboardService", "$rootScope", "$cookies", "EndpointTestService", "ObjectService", "EndpointService", "$modal", "$timeout", require("./controllers/DashboardCtrl")]);

shareclock.controller('HomeCtrl', ["$scope", "FilesService", "upload", require("./controllers/HomeCtrl")]);
shareclock.controller('FileCtrl', ["$scope", "FilesService", "$stateParams", require("./controllers/FileCtrl")]);


shareclock.service('DashboardService', ["$resource", "$q", "$rootScope", require("./services/DashboardService")]);
shareclock.service('ObjectService', ["$resource", "$q", "$rootScope", require("./services/ObjectService")]);
shareclock.service('EndpointService', ["$resource", "$q", "$rootScope", require("./services/EndpointService")]);
shareclock.service('EndpointTestService', ["$resource", "$q", "$rootScope", "$http", require("./services/EndpointTestService")]);

shareclock.service('FilesService', ["$resource", "$q", "TransformRequestAsFormPost", require("./services/FilesService")]);

shareclock.factory('TransformRequestAsFormPost', [require("./factories/TransformRequestAsFormPost")]);

angular.bootstrap(document, ['ShareClock']);