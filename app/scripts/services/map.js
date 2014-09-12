;
(function(){
  'use strict';

  var Map = function(){
    var api         = {},
        mapboxURL   = 'http://{s}.tiles.mapbox.com/v3/raigons.jc668djc/{z}/{x}/{y}.png',
        coordinates = [-21.25404, -44.99003];

    api.loadMap = function(){
      setImagePath();

      var map = L.map('map').setView(coordinates, 17);      

      L.tileLayer(mapboxURL, {
        maxZoom: 25
      }).addTo(map);

      loadMarkers(map);
    };

    var setImagePath = function(){
      if (!L.Icon.Default.imagePath) L.Icon.Default.imagePath = 'images/leaflet';
    };

    var loadMarkers = function(map){
      var marker = L.marker(coordinates).addTo(map);
    };

    return api;
  };

  angular.module("mapTractorApp.map", []).factory("Map", Map);
})();


