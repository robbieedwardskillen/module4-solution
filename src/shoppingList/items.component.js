(function(){
	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'src/shoppinglist/templates/categories.template.html',
		bindings: {
		   items: '<'
		}
	});
})()