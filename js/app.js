var module = angular.module("chapter1", ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/about', {
                    templateUrl: 'about.html',
                    controller: 'RouteController'
                }).
                when('/contact', {
                    templateUrl: 'contact.html',
                    controller: 'RouteController'
                }).
				when('/home', {
                    templateUrl: 'home.html',
                    controller: 'RouteController'
                }).
				when('/packages', {
                    templateUrl: 'package/packages.html',
                    controller: 'RouteController'
                }).
                when('/package/:package', {
                    templateUrl: 'package/package-template.html',
                    controller: 'PackageCtrl'
                }).
				when('/portfolios', {
                    templateUrl: 'portfolio/portfolios.html',
                    controller: 'RouteController'
                }).
                when('/portfolio/:portfolio', {
                    templateUrl: 'portfolio/portfolio-template.html',
                    controller: 'PortfolioCtrl'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);
module.controller("RouteController", function($scope) {})