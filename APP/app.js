(function() {
	
	angular 
		.module("portfolio2App", ['ui.router']);

	angular
		.module('portfolio2App')
		.config(function($stateProvider,$urlRouterProvider) {
		
        
			$stateProvider
				.state("work", {
					url: "/",
					views : {
						"" : { templateUrl: "site/partials/work.html" },
						"projects@landing" : { templateUrl: "site/partials/work.html" },
					}
				})

				.state('about', {
					url: "/about",
	  				templateUrl: "site/partials/about.html",  				
				})			

				.state('contact', {
					url: "/contact",
	  				templateUrl: "site/partials/contact.html",  				
				})

				.state('this-is-not-a-toy', {
					url: "/this-is-not-a-toy",
	  				templateUrl: "site/projects/this-is-not-a-toy.html", 				
				})

				.state('rise', {
					url: "/rise",
	  				templateUrl: "site/projects/rise.html", 				
				})

				.state('earthwatch', {
					url: "/earthwatch",
	  				templateUrl: "site/projects/earthwatch.html", 				
				})

				.state('sanar', {
					url: "/sanar",
	  				templateUrl: "site/projects/sanar", 				
				})				

				.state('to-sunrise', {
					url: "/to-sunrise",
	  				templateUrl: "site/projects/to-sunrise.html", 				
				})


				.state('eyeris-tools', {
					url: "/eyeris-tools",
	  				templateUrl: "site/projects/eyeris-tools.html", 				
				})

				.state('journal', {
					url: "/journal",
	  				templateUrl: "site/projects/journal.html", 				
				})

				.state('fore', {
					url: "/fore",
	  				templateUrl: "site/projects/fore.html", 				
				})

				.state('rexpressions', {
					url: "/rexpressions",
	  				templateUrl: "site/projects/rexpressions.html", 				
				});

				$urlRouterProvider.otherwise("/");
		})

		.run(function($rootScope, $state, $stateParams){
		  $rootScope.$state = $state;
		  $rootScope.$stateParams = $stateParams;
		  $rootScope.$on('$stateChangeSuccess', function() {
		    document.body.scrollTop = document.documentElement.scrollTop = 0;
		  }); 
		}) 
})();













// (function() {
	
// 	angular 
// 		.module("portfolioApp", ['ui.router']);

// 	angular
// 		.module('portfolioApp')
// 		.config(function($stateProvider,$urlRouterProvider) {
		
        
// 			$stateProvider
// 				.state("landing", {
// 					url: "/",
// 					views : {
// 						"" : { templateUrl: "site/partials/landing.html" },
// 						"projects@landing" : { templateUrl: "site/partials/work.html" },
// 					}
// 				})

// 				.state('about', {
// 					url: "/about",
// 	  				templateUrl: "site/partials/about.html",  				
// 				})			

// 				.state('projects', {
// 					url: "/projects",
// 					templateUrl: "site/partials/work.html",
// 				})

// 				.state('projects.one', {
// 					url: "/one",
// 	  				templateUrl: "site/projects/one.html", 				
// 				})		



// 				$urlRouterProvider.otherwise("/");
// 		})

// })();




