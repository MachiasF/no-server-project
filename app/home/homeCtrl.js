var app = angular.module('dotaApp');

app.controller('homeCtrl', function($scope, homeServ){
	
	$scope.homePlayers = homeServ.homePlayers;
	$scope.teamStore = homeServ.storeItems;

	
		

	$scope.findItem = function (item) {
		$scope.currentItem = item;
		console.log($scope.currentItem)
	};
	

});

