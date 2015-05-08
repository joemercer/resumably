'use strict';

/**
 * @ngdoc function
 * @name resumablyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the resumablyApp
 */
angular.module('resumablyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
