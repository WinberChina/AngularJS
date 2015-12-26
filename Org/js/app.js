var app = angular.module('app', []);
app.controller('MyController', ['$scope', function($scope) {
	$scope.username = 'World';

	$scope.sayHello = function() {
		$scope.greeting = 'Hello ' + $scope.username + '!';
	}
}]);

app.controller('GreetController', ['$scope','$rootScope', function($scope, $rootScope) {
	$scope.name = 'World';
	$rootScope.department = 'Angular';
}]);

app.controller('ListController', ['$scope', function($scope) {
	$scope.names = ['Igor', 'Misko', 'Vojta'];
}]);

app.controller('EventController', ['$scope', function($scope) {
	$scope.count = 0;
	$scope.$on('MyEvent', function() {
		$scope.count ++;
	})
}]);
