(function() {
    'use strict';

    angular
        .module('movieApp',['ui.router','ngResource'])
		.run(function () {
    console.log('Done loading dependencies and configuring module!');
  });
   /* 
    .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }*/
})();
