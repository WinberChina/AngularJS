var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('phones/phones.json').success(function(data) {
			$scope.phones = data;
		});
		
		$scope.orderProp = "age";
	}
]);

/*phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		alert(1);
		$http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
			console.log(data);
			$scope.phone = data;
		});
	}
]);

var phonecatControllers = angular.module('phonecatControllers',[]);*/

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);
