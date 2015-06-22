"use strict";

angular.module('ToolbarCtrl', []);

class ToolbarCtrl {

    constructor($http, $mdSidenav, $timeout) {
        this.$http = $http;
        this.$mdSidenav = $mdSidenav;
        this.$timeout = $timeout;
    }

}

module.exports = ToolbarCtrl;