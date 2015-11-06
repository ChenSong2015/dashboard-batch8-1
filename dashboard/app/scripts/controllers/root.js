var root_partial = angular.module("root_partial",['ui.router']);
root_partial.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		// .state("root",{
		// 	url:"/root",
		// 	templateUrl:"../templates/overview.html"
		// })
		.state("overview",{
			url:"/overview",
			templateUrl:"overview.html"
		})
		.state("work",{
			url:"/work",
			templateUrl:"work.html"
		})
		.state("producer",{
			url:"/producer",
			templateUrl:"producer.html"
		})
		.state("contact",{
			url:"/contact",
			templateUrl:"contact.html"
		})
		$urlRouterProvider.otherwise("/work")
})