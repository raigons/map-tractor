(function(moduleDirectives){
  'use strict';

  var loadMapContainer = function($window){
    var api = {};

    api.link = function($scope, element){
      element.css('height', $window.innerHeight.toString() + 'px');
      $scope.initMap();
    };

    return api;
  };

  moduleDirectives.directive('loadMapContainer', ['$window', loadMapContainer]);

})(angular.module('mapTractorApp.Directives'));
