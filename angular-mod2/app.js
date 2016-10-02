(function () {
'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

	
    ToBuyShoppingController.$inject = ['$scope','ShoppingListCheckOffService'];
	function ToBuyShoppingController($scope,ShoppingListCheckOffService) {
		
		this.list = ShoppingListCheckOffService.getBuyList();
		
		this.isEmpty = function(){
			if((this.list.length)>0){
				return false;
			}
			return true;
		}
			
		this.buy = function(idx){
			ShoppingListCheckOffService.checkout(idx);
		}
    }

	AlreadyBoughtShoppingController.$inject = ['$scope','ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService){
		
		this.list  = ShoppingListCheckOffService.getBoughtList();
		
		this.isEmpty = function(){
			if((this.list.length)>0){
				return false;
			}
			return true;
		}	
	}
	
	function ShoppingListCheckOffService(){
		
		var toBuyList  = [
			{ name:"Cookies",       quantity: 10 },
			{ name:"Donuts",        quantity: 15 },
			{ name:"Chocolates",    quantity: 33 },
			{ name:"Apples",        quantity: 18 },
			{ name:"Something",     quantity: 12 },
			{ name:"Something Else",quantity: 23 }			
		];
			
		var boughtList = [];
		
		
		this.checkout =function(idx){
		    var item = toBuyList[idx];
			toBuyList.splice(idx,1);
			boughtList.push(item);
		}
		
		
		this.getBuyList = function(){
			return toBuyList;
		}
		
		this.getBoughtList = function(){
			return boughtList;
		}
	}

})();
