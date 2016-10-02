
(function (){
	'use strict';
	
	angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){
		
		$scope.checkIfBloat = function(){
			var line = "";
			var line = $scope.mytext;
			if(line===undefined || line.length==0){
				goBad();
			}else{
				var words = line.trim().split(',');
                var count =0 ;
				words.forEach(function(item){
					if(item.trim().length>0){count+=1}
					});
				
				if(count==0){
					goBad();
				}else{
					if(count>3){		//if( words.length >3){
						$scope.result = "Too much!";
					}else{
						$scope.result ="Enjoy!";
					}
					$scope.colored = {"color":"green"};
					$scope.bordered = {"border-color":"green"};
				}
			}
		
			function goBad(){
				$scope.result = "Please enter data first";
				$scope.colored = {"color":"red"};
				$scope.bordered = {"border-color":"red"};
			}
		}
	}
	
})();