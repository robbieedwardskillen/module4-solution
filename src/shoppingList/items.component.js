(function(){
	'use strict';
	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'src/shoppingList/templates/items.template.html',
		bindings: {
		   items: '<'
		}
	});
})();