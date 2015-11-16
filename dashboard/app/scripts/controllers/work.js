 // var App = angular.module("DashboardApp", []);

App.controller("WorkCtrl", function($scope, $http, AddEditDel){
//App.controller("userInfo", function($scope, $http){

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
	$scope.addItem=function() {
		AddEditDel.setFlag(true, true, false, false);
		$scope.$emit('addItem');
		$scope.$on("addSubmit", function(e, addContent) {
			if(addContent==false) {
			}else{
				$scope.contents.push(addContent);
			}
		});
	}
	
	$scope.editItem=function() {
		//AddEditDel.setFlag(true, false, true, false);
	}
	$scope.delItem=function() {
		//AddEditDel.setFlag(true, false, false, true);
		//$scope.$emit('delItem');
		//$scope.$on("deleteSubmit", function(e, flag) {
		//	if(flag==false) {
		//	}else{
				$scope.contents.splice($scope.contents.indexOf(this.content), 1);
		//	}	
		//});
	}
	



});