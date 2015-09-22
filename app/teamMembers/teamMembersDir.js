var app = angular.module('dotaApp');

app.directive('playerDisplay', function(){
	return {
		templateUrl: 'app/html/memberTmpl.html',
		controller: function($scope) {
			$scope.toggle = function(object){
				$scope.eachPlayers.forEach(function(object){
					object.details = false;
				});
				object.details = !object.details;
			}
		},
		scope: {
			eachPlayers: '=',			 
		}
		// link: function(scope, element, attrs){
		// 	// console.log(scope);
		// 	element.on('click', function(){
		// 		// console.log('clicked')
		// 		scope.show = !scope.show;
		// 		scope.$apply();
		// 	});
		// }
	}
});
	