"use strict";

var mainApp = angular.module('mainApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMdIcons', 'ui.router', 'angularMoment']);

// Toolbar
require('js/toolbar');
// Settings
require('js/widgets/settings');
// Clock
require('js/widgets/clock');

mainApp.config(function($routeProvider) {
    $routeProvider

        .when('/clock', {
            templateUrl : 'views/clock.php',
            controller  : 'clockController'
        })

        .when('/settings', {
            templateUrl : 'views/settings.php',
            controller  : 'settingsController'
        });
});

mainApp.controller('dashboardController', function($scope) {
    $scope.message = 'HOME';
});

mainApp.controller('clockController', function($scope) {
    $scope.message = 'CLOCK';
});

mainApp.controller('settingsController', function($scope) {
    $scope.message = 'SETTINGS';
});