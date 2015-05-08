'use strict';

/**
 * @ngdoc service
 * @name resumablyApp.db
 * @description
 * # db
 * Service in the resumablyApp.
 */
angular.module('resumablyApp')
  .service('db', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this._db = [{
    	tags: ['experience', 'dev'],
    	data: {
    		company: 'Noom',
    		position: 'Software Engineer'
    	}
    },{
    	tags: ['experience', 'pm'],
    	data: {
    		company: 'Microsoft',
    		position: 'Project Manager'
    	}
    }];

    this.push = function() {

    };

  });
