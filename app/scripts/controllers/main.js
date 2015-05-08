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
		// let the db service be in charge of
		// notifying the view when it has data
		db.onInitialized = function() {
			$scope.$apply();
		};

		$scope.newItem = {
			content: ''
		};



  });
