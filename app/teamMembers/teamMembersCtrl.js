var app = angular.module('dotaApp');

app.controller('teamMembersCtrl', function($scope, homeServ, teamMemberServ, playerRef){
	

	$scope.currentUser = {}
	console.log(playerRef);
	$scope.currentUser = playerRef;
	


	$scope.homePlayers = homeServ.homePlayers;
	$scope.eachPlayers = teamMemberServ.playersInfo;

		
	
	$scope.findUser = function (user) {
		$scope.currentUser = user;
		console.log(user);
	};
	
	

	

});
