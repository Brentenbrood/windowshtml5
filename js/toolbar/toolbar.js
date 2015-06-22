"use strict";

angular.module('ToolbarCtrl', []);

class ToolbarCtrl {

    constructor($http, $mdSidenav, $timeout) {
        this.$http = $http;
        this.$mdSidenav = $mdSidenav;
        this.$timeout = $timeout;
    }

    toggleSideBar() {
        console.log('click toggle');

        this.$mdSidenav('right').toggle()
    }

    buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        },300);

        return debounceFn;
    }

}

module.exports = ToolbarCtrl;