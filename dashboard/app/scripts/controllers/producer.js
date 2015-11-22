App.controller('producerCtrl', function ($timeout, $scope, $window) {
	$scope.search = function(){
		$scope.queryShow = true;
		document.getElementById("pac-input").value = "football field";
	}
 })
App.directive('s',function($timeout){
	return{
		scope:{},
		restrict:'A',
		link:function(scope,element,attrs){
			element.bind("mouseover",function(){
				$timeout(function(){
					angular.element("#pac-input").focus();},1000);
				
			})
			

		}
	}
})

