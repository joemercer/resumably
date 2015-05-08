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
    $scope.readableData = $scope.db;

		$scope.newItem = {
			tags: [],
			data: {
				company: 'Tagged',
    		position: 'Software Engineer'
			}
		};

		$scope.newProperty = {
			key: 'location',
			value: 'San Francisco'
		};

		$scope.addNewProperty = function() {
			$scope.newItem.data[$scope.newProperty.key] = $scope.newProperty.value;

			$scope.newProperty = {
				key: 'startDate',
				value: 'September 2014'
			};
		};

		$scope.addNewItem = function() {
			$scope.db.push($scope.newItem);

			$scope.newItem = {
				tags: [],
				data: {
					company: 'Bazaarvoice',
	    		position: 'Software Engineer'
				}
			};
		};

  });
