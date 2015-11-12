App.controller('userInfo',function($scope,$cookieStore,$location,$http){
	$http.get('http://localhost:3000/api/profile')
		.success(function(data, status, headers, config) {
			console.log(data.profiles[0]);
		}).error(function(data, status, headers, config){

		})
});