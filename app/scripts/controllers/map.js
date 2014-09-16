(function(mapTractorApp){
  'use strict';

  var MapController = function($scope, map, Vehicle, User){
    $scope.initMap = function(){
      var request = User.get({userId: 1});
      request.$promise.then(loadMapOfUser);
    };

    var loadMapOfUser = function(user){
      map.loadMap(user);
      loadVehicles();
    };

    var loadVehicles = function(){
      var request = Vehicle.all();
      request.$promise.then(function(vehicles){
        map.loadVehicles(vehicles);
      });
    };
  };

  mapTractorApp.controller('MapController', ['$scope', 'Map', 'Vehicle', 'User', MapController]);
})(angular.module('mapTractorApp'));
