(function () {
'use strict';

angular.module('MenuApp')
.run(function($rootScope) {
  	$rootScope.$on("$stateChangeError", console.log.bind(console));
	});

})();