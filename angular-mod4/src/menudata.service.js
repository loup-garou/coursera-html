(function () {

angular.module('data',['ui.router'])
.service('MenuDataService');

MenuDataService.$inject = ['$stateProvider', '$urlRouterProvider'];
function MenuDataService($stateProvider, $urlRouterProvider) {
	
	function getAllCategories(){
		var catUrl = "https://davids-restaurant.herokuapp.com/categories.json";
		
		return __makePromise(catUrl);
	}
	
	function getItemsForCategory(categoryShortName){
		var itemUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName;
		
		return __makePromise(itemUrl);	
	}
	
	
	// builder to make less text
	function __makePromise(myUrl){
		var promise = function(){
			var response = $http({
				method: "GET",
				url: myUrl,	
			}
			return response;
			);
		}
		return promise;
	}
}

})();
