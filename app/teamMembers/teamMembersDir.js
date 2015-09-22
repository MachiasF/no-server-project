var app = angular.module('dotaApp');

app.directive('playerData', function(){
	return {
		templateUrl: 'app/html/memberTmpl.html',
		scope: {
			member: '=',			 
		}
		
	}
});
	