;
(function(){
  'use strict';

  var Map = function(){
    var api         = {},
        mapboxURL   = 'http://{s}.tiles.mapbox.com/v3/raigons.jc668djc/{z}/{x}/{y}.png',
        coordinates = [-21.25404, -44.99003];

    api.loadMap = function(){
      var map = L.map('map').setView(coordinates, 17);      

      L.tileLayer(mapboxURL, {
        maxZoom: 25
      }).addTo(map);

      loadMarkers(map);
    };

    var loadMarkers = function(map){
      marker = L.marker(coordinates).addTo(map);
    };

    return api;
  };

  angular.module("mapTractorApp.map", []).factory("Map", Map);
})();


