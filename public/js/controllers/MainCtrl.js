angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.tagline = 'To the moon and back!';
	//$scope.allNerds = 'If you knwo what I mean';
	$scope.allNerds = app.get('/api/nerds');
});