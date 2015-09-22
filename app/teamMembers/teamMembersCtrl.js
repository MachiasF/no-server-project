var app = angular.module('dotaApp');

app.controller('teamMembersCtrl', function($scope, homeServ, teamMemberServ, playerRef){
	
	console.log(playerRef);
	
	$scope.homePlayers = homeServ.homePlayers;
	$scope.eachPlayers = teamMemberServ.playersInfo;

	
	
	$scope.currentUser = {};
	$scope.findUser = function (user) {
		$scope.currentUser = user;
		console.log(user);
	};

});
