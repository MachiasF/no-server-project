var app = angular.module('dotaApp');

app.controller('teamMembersCtrl', function($scope, homeServ, teamMemberServ){
	$scope.homePlayers = homeServ.homePlayers;
	console.log($scope.homePlayers);
	$scope.eachPlayers = teamMemberServ.playersInfo;
	console.log($scope.eachPlayers);
	
	// $scope.results = teamMemberStats.getTeamInfo();
	//console.log(results());
});
