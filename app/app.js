var app = angular.module('dotaApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
	$routeProvider
			.when('/home', {
				templateUrl: '/app/html/homeTmpl.html',
				controller: 'homeCtrl'
			})
			.when('/home/members/:memberId', {
				templateUrl: '/app/html/teamMembersTmpl.html',
				controller: 'teamMembersCtrl',
				resolve: {
					playerRef: function($route, teamMemberServ) {

						return teamMemberServ.routePlayer($route.current.params.memberId);
					}
				}
			})
			
			.otherwise('/home')
	
});