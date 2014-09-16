(function(MapModule, L){
  'use strict';

  var MarkerSetter = function(){
    var api = {};

    api.addMarker = function(mapLayer, latLongPositions){
      return L.marker(latLongPositions).addTo(mapLayer);
    };

    api.addMarkerFromGeoJSON = function(mapLayer, geoJSON){
      L.geoJson(geoJSON).addTo(mapLayer);
    };

    return api;
  };

  MapModule.factory('MarkerSetter', MarkerSetter);

})(angular.module('mapTractorApp'), window.L);
