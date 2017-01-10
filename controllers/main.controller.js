(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'movieList'];

    function MainCtrl ($scope,movieList) {//movieList (provider) è stata iniettata al termine della resolve del app.module
        var vm = this;

        vm.movies=movieList.data;
    }
    
    
})();
