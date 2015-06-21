var mainApp = angular.module('mainApp', ['ngRoute']);

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