(function(mapTractorApp){
  'use strict';

  var Vehicle = function($resource){
    return $resource('vehicles/list.json', {}, {
      all: {method:'GET', params:{}, isArray:true}
    });
  };

  mapTractorApp.factory('Vehicle', ['$resource', Vehicle]);

})(angular.module('mapTractorApp'));
