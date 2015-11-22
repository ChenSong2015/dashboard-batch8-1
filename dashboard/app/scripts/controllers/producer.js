App.controller('producerCtrl', function ($scope, $window) {
	$scope.search = function(){
		document.getElementById("pac-input").value = "football field";
		$scope.queryShow = true;
	}
 })
App.directive('s',function($timeout){
	return{
		scope:{},
		restrict:'A',
		link:function(scope,element,attrs){
			element.bind("mouseover",function(){
				angular.element("#pac-input").focus();
			})
			
		}
	}
})

