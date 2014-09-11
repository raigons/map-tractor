;
(function(mapTractorApp){
  'use strict';

  var onLoadMapDirective = function($window, map){
    var api = {};

    api.link = function(scope, element){
      var mapDiv = $window.document.getElementById('map');
      mapDiv.style.height = $window.innerHeight.toString() + 'px';
      map.loadMap();
    };

    return api;
  };

  mapTractorApp.directive('onLoadMap', ['$window', 'Map', onLoadMapDirective]);

})(angular.module('mapTractorApp'));
