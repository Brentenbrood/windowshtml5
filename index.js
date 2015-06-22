"use strict";

var mainApp = angular.module('mainApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMdIcons', 'ui.router', 'angularMoment'])
    .directive('toolbar', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: 'js/toolbar/toolbar.js'
        };
    })
    .directive('clock', function() {
        return {
            require: '^js/widgets/clock/clock.js',
            restrict: 'E',
            transclude: true,
            controller: 'js/widgets/clock/clock.js',
            templateUrl: 'views/clock.html'
        };
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