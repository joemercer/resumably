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

    this._db = [{"tags":["experience","pm"],"ranking":1500,"timeAdded":1431285777121,"timeUpdated":1431285777121,"data":{"company":"Microsoft","position":"Program Manager","location":"Redmond"}}];

    this.push = function(data, tags) {
    	var self = this;

    	var now = Date.now();

    	self._db.push({
    		tags: tags,
    		ranking: 1500,
    		timeAdded: now,
    		timeUpdated: now,
    		data: data
    	});
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
    			sum = sum || (item.tags.indexOf(tags[i]) > -1);
    		}
    		return sum;
    	});

    };

  });
