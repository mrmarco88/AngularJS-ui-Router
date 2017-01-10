(function() {
    'use strict';

    angular
        .module('movieApp',[])
        .controller('ListCtrl', ListCtrl);

    ListCtrl.$inject = ['$scope','$stateParams', 'titleList'];

    function ListCtrl ($scope,$stateParams,titleList) {//titleList (provider) è stata iniettata al termine della resolve del app.module
        var vm = this;
		vm.movieID= $stateParams.movieID;
		if(!vm.movies){
			vm.movies=[];
		}
		
		if(!vm.movieName){
			vm.movieName="";
		}
		
		if(!vm.episodes){
			vm.episodes=[];
		}
		
        vm.movies=titleList.data.movies;
		var numMovies = $scope.movies.length;
		for(var i=0; i<numMovies;i++){
			if(vm.movies[i].id == vm.movieID){
				vm.movieName=vm.movies[i].series;
				vm.episodes=vm.movies[i].episodes;
			}
		}
    }
    
    
})();
