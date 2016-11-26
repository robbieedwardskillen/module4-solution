(function(){
	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'src/shoppingList/templates/categories.template.html',
		bindings: {
		   items: '<'
		}
	});
})();
