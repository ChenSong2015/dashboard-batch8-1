//var App = angular.module("DashboardApp", []);

App.controller("WorkCtrl", function($scope, $http){

	var a={
		author: "haziqhalimy",
		comment: "174 comments",
		id: "001",
		image: "assets/images/work/1.jpg",
		like: "12,774 likes",
		title: "Journey in Central Park"
	}

	$http.get('http://localhost:3000/api/work').success(function(data, status, headers, config) {
		$scope.contents=data.works;
	}).error(function(data, status, headers, config) {
		console.log("http get error.");
	});
	
	$scope.visible=false;
	$scope.cardShow=true;
	$scope.listShow=false;
	$scope.showList=function() {
		$scope.visible=!$scope.visible;
	}
	$scope.setList=function() {
		$scope.cardShow=false;
		$scope.listShow=true;
		$scope.visible=!$scope.visible;
	}
	$scope.setCard=function() {
		$scope.cardShow=true;
		$scope.listShow=false;
		$scope.visible=!$scope.visible;
	}
	$scope.addItem=function(data) {
		($scope.contents).push(a);
	}

});