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
                    templateUrl: 'packages/packages.html',
                    controller: 'RouteController'
                }).
				when('/portfolio', {
                    templateUrl: 'portfolio/portfolio.html',
                    controller: 'RouteController'
                }).
                when('/portfolio/:portfolio', {
                    templateUrl: 'portfolio/portfolio-template.html',
                    controller: 'PortfolioCtrl'
                }).
				when('/portfolio/maternity', {
                    templateUrl: 'portfolio/maternity.html',
                    controller: 'RouteController'
                }).
				when('/portfolio/newborn', {
                    templateUrl: 'portfolio/newborn.html',
                    controller: 'RouteController'
                }).
				when('/portfolio/family', {
                    templateUrl: 'portfolio/family.html',
                    controller: 'RouteController'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);
module.controller("RouteController", function($scope) {})