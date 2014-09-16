(function(mapTractorApp){
  'use strict';

  var User = function($resource){
    return $resource('users/:userId.json', {}, {
      query: {method:'GET', params:{userId:1}, isArray:false}
    });
  };

  mapTractorApp.factory('User', ['$resource', User]);

})(angular.module('mapTractorApp'));
