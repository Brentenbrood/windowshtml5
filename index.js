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

        .when('/', {
            templateUrl : '',
            controller  : 'dashboardCtrl'
        })

        .when('/clock', {
            templateUrl : 'views/clock.php',
            controller  : 'clockCtrl'
        })

        .when('/settings', {
            templateUrl : 'views/settings.php',
            controller  : 'settingsCtrl'
        });
});

mainApp.controller('dashboardCtrl', function($scope) {
    $scope.message = 'HOME';
});

mainApp.controller('clockCtrl', function($scope) {
    $scope.message = 'CLOCK';
});

mainApp.controller('settingsCtrl', function($scope) {
    $scope.message = 'SETTINGS';
});