(function(){
	angular.module('data')
	.component('categories', {
		templateUrl: 'src/shoppingList/templates/categories.template.html',
		bindings: {
		   items: '<'
		}
	});
})();
