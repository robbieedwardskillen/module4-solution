(function(){
	'use strict';
	angular.module('data')
	.service('MenuDataService', MenuDataService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

	MenuDataService.$inject = ['$http', 'ApiBasePath']
		function MenuDataService($http, ApiBasePath) {
			var service = this;
			service.getAllCategories = function(){
		    return $http({
		      method: 'GET',
		      url: (ApiBasePath + '/categories.json')
		    }).then(function(result){
		      return result.data;
		    }).catch(function(error){
		      return error;
		    })
		  };

		  service.getItemsForCategory = function(categoryShortName){
		     return $http({
		      method: 'GET',
		      url: (ApiBasePath + '/menu_items.json')
		    }).then(function(result){
		      var allItems = result.data.menu_items;
		      var foundItems = [];
		      for (var i = 0; i < allItems.length; i++){
		        if (allItems[i].short_name.toLowerCase().indexOf(categoryShortName.toLowerCase()) !== -1){
		        	foundItems.push(allItems[i]);
		        }
		      }
		      return foundItems;
		    }).catch(function(error){
		    	console.log("console.log error: " error);
		      return error;
		    })
		  };
}
})();

