(function() {
    'use strict';

    angular
        .module('movieApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider','$urlRouterProvider'];

    function stateConfig($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		
        $stateProvider
		.state('home', {
            url: '/home',
            templateUrl: 'templates/main.html',            
            resolve: {
                movieList: function($http){
					return $http.get("https://api.myjson.com/bins/u7frr").then( 
					function (response){
						alert("Sto chiamando series");
						console.debug("response: " + response);
						console.debug(response);
						console.debug("response.data: "+response.data);
						console.debug(response.data);
						return response;
					},
                function (response) {
                    console.log("ERROR in httpget method, http status: " + response.status);
                }
					);
				}
			},
			 controller: 'MainCtrl',
             controllerAs: 'mc'
					
            
        })
		.state('home.list', {	
            url: '/list/:movieID', 
			templateUrl: 'templates/list.html',
            
            //controllerAs: 'lc'
        
            
            resolve: {
                titleList: function($http){
					return $http.get("https://api.myjson.com/bins/15io9j").then( 
					function (response){
						console.debug(response.data);
						return response;
					},
                function (response) {
                    console.log("ERROR in httpget method, http status: " + response.status);
                }
					);
				}
			},
			controller: 'ListCtrl'
					
            
        });
    }
})();
