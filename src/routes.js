(function(){
	'use strict';
	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
	function RoutesConfig($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'src/shoppingList/templates/home.template.html'
	})
	.state('itemList', {
		url: '/items/{itemName}',
		templateUrl: 'src/shoppingList/templates/main-items.template.html',
		controller: 'ItemsController as itemList',
		resolve: {
			items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
				return MenuDataService.getItemsForCategory($stateParams.itemName).then(function(items){
					return items;
				}).catch(function(error){
					console.log(error);
				});
			}]
		}
		
	})
	.state('categoryList', {
		url: '/categories',
		templateUrl: 'src/shoppingList/templates/main-categories.template.html',
		controller: 'CategoriesController as categoryList',
		resolve: {
			items: ['MenuDataService', function(MenuDataService) {
				return MenuDataService.getAllCategories();
			}]
		}
	});
		
	// .state('itemList', {
	// 	url: '/categories/{itemName}',
	// 	templateUrl: 'src/shoppingList/templates/main-items.template.html',
	// 	controller: 'ItemsController as itemList',
	// 	// resolve: {
	// 	// 	items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
	// 	// 		return MenuDataService.getItemsForCategory($stateParams.itemName).then(function(items){
	// 	// 			return items;
	// 	// 		}).catch(function(error){
	// 	// 			console.log(error);
	// 	// 		});
	// 	// 	}]
	// 	// }
	// });

	}
})();



