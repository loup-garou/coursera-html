(function () {
'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
	.constant('myUrl',"https://davids-restaurant.herokuapp.com/menu_items.json");


    NarrowItDownController.$inject = ['$scope','MenuSearchService','$http','myUrl'];
	function NarrowItDownController($scope,MenuSearchService,$http,myUrl) {
		var my = this;
		my.found= Array();
		$scope.keyWord="";
		
		this.show = function(){
			my.found.splice(0, my.found.length);
			my.empty=false;
			
			if($scope.keyWord===""){
				my.empty=true;
			}else{
				var promise = MenuSearchService.getMenuItems();
				promise.then( function (response) {
					my.items = response.data.menu_items;
							
					for (var item in my.items){
						if (my.items[item].description.includes($scope.keyWord)){
							my.found.push(my.items[item]);
						}
					}
					if(my.found.length===0){
						my.empty=true;
					}
				})
				.catch(function (error) {
					console.log("Something went terribly wrong.");
				});
			}
		}

		this.removeItem = function(index){
			my.found.splice(index,1);
		}
	}
	
    
	MenuSearchService.$inject = ['$http','myUrl'];
    function MenuSearchService($http,myUrl){
		
		this.found =[];
		
		this.getMenuItems = function(){
			var response = $http({
				method: "GET",
				url: myUrl,
				/*
				params: {
					category: shortName
				}
				*/
			});
			
			return response;	
		}
		
		function getMatchedMenuItems(searchTerm){
		
		}
	}
})();
