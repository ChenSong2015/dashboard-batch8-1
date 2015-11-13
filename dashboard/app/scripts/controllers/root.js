
App.controller('userInfo',function($scope,$cookieStore,$location,$http){
	console.log("root");
	var auth = $cookieStore.get("username");
	if(auth!="minh"&&auth!="darth"){
		$location.path("/login");
	}
	var users = {
			params: {
				user: auth},
		};
	$http.get('http://localhost:3000/api/getuser', users).success(
		function(data, status, headers, config) {
			$('#navbar span:first-of-type').text(data.name);
			console.log(data);
			var d = new Date();
		    var day = d.getDate();
		    var month = d.getMonth()+1;
		    var year = d.getFullYear();
		    var dateString = day + "/" + month + "/" + year;
			$('#navbar span:first-of-type + span').text(dateString);
	    }).error(
	    	function(data, status, headers, config) {
	            console.log("error in the page");
	        });
	$scope.logout = function(){
		$cookieStore.remove("username");
		$location.path("/login");
	}
})
