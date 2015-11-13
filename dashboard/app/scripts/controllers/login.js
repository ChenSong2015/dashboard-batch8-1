'use strict';
// angular.module('Authentication', [])
app.controller('LoginController', function($scope, $http, $rootScope, $location) {
    $scope.submitForm = function() {
        $http.post('http://localhost:3000/api/login', {
                userName: $scope.user.username,
                password:  $scope.user.password
            })
            .success(function(){
            	$location.path('/root');
            })
            .error(function(){
            	$scope.error = 'Username or password is incorrect';
            });
    };
});
