(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// ItemsController.$inject = ['items'];
// function ItemsController(items) {
function ItemsController() {
	  var itemList = this;
  	  itemList.items = items;
}

})();

