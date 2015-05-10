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


  	$scope.readableData = db._db;


  	// ## query the database

  	// holds the user's query into db
  	$scope.query = '';

  	// pull tags out of the query
  	$scope.queryTags = function(){
  		if (!$scope.query) {
  			return [];
  		}

  		return $scope.query.split(' ');
  	};

  	// function to return the filtered list from db
    $scope.db = function(){
    	return db.pull($scope.queryTags());
    };



    // ## add new items to the database
    // !!! need to use .push


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
