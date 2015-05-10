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

    this._db = [{"tags":["experience","dev"],"data":{"company":"Noom","position":"Software Engineer"}},{"tags":["experience","pm"],"data":{"company":"Microsoft","position":"Project Manager"}}];

    this.push = function() {

    };

    this.pull = function(tags) {
    	var self = this;

    	if (!tags.length) {
    		return self._db;
    	}

    	return self._db.filter(function(item){
    		// item must contain at least one of the tags
    		var sum = false;
    		for (var i=0; i<tags.length; ++i) {
    			sum = sum || (item.tags.indexOf(tags[0]) > -1);
    		}
    		return sum;
    	});

    };

  });
