var workApp = angular.module("WorkApp", []);
var x;
workApp.controller("WorkCtrl", function($scope, $http){
	$http.get('http://localhost:3000/api/work').success(function(data, status, headers, config) {
			$scope.contents=data.works;
			x=$scope.contents;
			console.log($scope.content);
		}).error(function(data, status, headers, config) {
			console.log("http get error.");
		});

});