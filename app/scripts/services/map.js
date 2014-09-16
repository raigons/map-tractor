(function(L){
  'use strict';

  var Map = function(markerSetter){
    var api         = {},
        map;

    api.loadMap = function(user){
      setImagePath();

      map = L.map('map').setView(user.centerCoordinates, user.initialZoom || 16);

      L.tileLayer(user.mapServiceUrl, {
        maxZoom: user.maxZoom
      }).addTo(map);
    };

    api.loadVehicles = function(vehicles){
      markerSetter.addMarkerFromGeoJSON(map, vehicles);
    };

    api.mapLayer = function(){
      return map;
    };

    var setImagePath = function(){
      if (!L.Icon.Default.imagePath) { L.Icon.Default.imagePath = 'images/leaflet'; }
    };

    return api;
  };

  angular.module('mapTractorApp').factory('Map', ['MarkerSetter', Map]);
})(window.L);


