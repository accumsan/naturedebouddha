'use strict';

var app = angular.module("minh", ['ui.bootstrap']);

app.controller("IndexController", function($scope) {
	$scope.init = function() {
        $scope.apropos = false;
        $scope.donation = false;
        $scope.apropos_c = "inactive main-nav__link js-toggle-subnav"
        $scope.evenements_c = "inactive main-nav__link js-toggle-subnav"
        $scope.bouddhisme_c = "inactive main-nav__link js-toggle-subnav"
        $scope.divers_c = "inactive main-nav__link js-toggle-subnav"
        $scope.contact_c = "inactive main-nav__link js-toggle-subnav"
        $scope.donation_c = "inactive main-nav__link js-toggle-subnav"
    }

    $scope.apropos_f = function() {
        $scope.init();
        $scope.apropos = true;
        $scope.apropos_c = "active main-nav__link js-toggle-subnav";
    }

    $scope.donation_f = function() {
        $scope.init();
        $scope.donation = true;
        $scope.donation_c = "active main-nav__link js-toggle-subnav";
    }

    $scope.apropos_f();

});


