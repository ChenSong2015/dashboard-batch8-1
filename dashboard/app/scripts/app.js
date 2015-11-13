// 'use strict';
//declare modules

// angular.module('root',[]);

// angular.module('DashboardApp',[
// 	'Authentication',
//     'root',
// 	'ngRoute',
// 	'ngCookies'
// ])
var app = angular.module('DashboardApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: "/",
            controller: 'LoginController',
            templateUrl: '../templates/login.html',
        })
        .state('root', {
            url: "/root",
            controller: 'rootController',
            templateUrl: '../templates/root.html'
        });
    $urlRouterProvider.otherwise('/');
});

// .run(['$rootScope', '$location', '$cookieStore', '$http',
//     function ($rootScope, $location, $cookieStore, $http) {
//         // keep user logged in after page refresh
//         $rootScope.globals = $cookieStore.get('globals') || {};
//         if ($rootScope.globals.currentUser) {
//             $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//         }

//         $rootScope.$on('$locationChangeStart', function (event, next, current) {
//             // redirect to login page if not logged in
//             if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
//                 $location.path('/login');
//             }
//         });
//     }]);
