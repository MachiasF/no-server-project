var app = angular.module('dotaApp');

app.directive('imagePop', function(){
	return {
		template: '<div class="fade">' +
					'</div>' +
					'<div>' +
						'<img ng-src="{{currentItem}}" width="500px">' +
					'</div>'

	
	};
});