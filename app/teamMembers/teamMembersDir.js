var app = angular.module('dotaApp');

app.directive('playerData', function(){
	
	var controller = function($scope) {
		$scope.getHero = function (hero) {
			$scope.currentHero = hero;
			console.log(hero);
			var audio = new Audio(hero);
			audio.play();
		};
	};
	return {
		templateUrl: 'app/html/memberTmpl.html',
		scope: {
			member: '='			 
		},
		controller: controller,

	}



});
	