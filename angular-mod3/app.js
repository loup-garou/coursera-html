(function () {
'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService',MenuSearchService);


    NarrowItDownController.$inject = ['$scope','MenuSearchService'];
	function NarrowItDownController($scope,MenuSearchService) {
		
		
		
		function getMatchedMenuItems(){
		
		}
    }
    
    function MenuSearchService(){
		
		function getMatchedMenuItems(searchTerm){
			url ='https://davids-restaurant.herokuapp.com/menu_items.json';
		
		}
	}
})();
