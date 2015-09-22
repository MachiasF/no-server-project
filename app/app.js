var app = angular.module('dotaApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
	$routeProvider
			.when('/home', {
				templateUrl: '/app/html/homeTmpl.html',
				controller: 'homeCtrl'
			})
			.when('/home/members', {
				templateUrl: '/app/html/teamMembersTmpl.html',
				controller: 'teamMembersCtrl'
			})
			.when('home/members/:memberId', {
				templateUrl: '/app/html/memberTmpl.html',
				controller: 'memberCtrl'
			})
			.otherwise('/home')
	
});