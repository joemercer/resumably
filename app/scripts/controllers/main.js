'use strict';

/**
 * @ngdoc function
 * @name resumablyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumablyApp
 */
angular.module('resumablyApp')
  .controller('MainCtrl', function ($scope, db) {

    $scope.db = db._db;

		$scope.newItem = {
			tags: [],
			data: {}
		};

		$scope.readableData = $scope.db;

  });
