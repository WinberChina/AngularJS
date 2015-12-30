'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
	function($resource) {
		return $resource('phones/:phoneId.json', {}, {
			query: {mehtod:'GET', params:{phoneId:'phones'}, isArray:true}
		})
	}]);
