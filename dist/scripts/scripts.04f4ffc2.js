"use strict";angular.module("mapTractorApp",["ngAnimate","ngSanitize","ngTouch","mapTractorApp.map"]),angular.module("mapTractorApp").controller("MainCtrl",function(){}),function(){var a=function(){var a={},b="http://{s}.tiles.mapbox.com/v3/raigons.jc668djc/{z}/{x}/{y}.png",c=[-21.25404,-44.99003];a.loadMap=function(){d();var a=L.map("map").setView(c,17);L.tileLayer(b,{maxZoom:25}).addTo(a),e(a)};var d=function(){L.Icon.Default.imagePath||(L.Icon.Default.imagePath="images/leaflet")},e=function(a){L.marker(c).addTo(a)};return a};angular.module("mapTractorApp.map",[]).factory("Map",a)}(),function(a){var b=function(a,b){var c={};return c.link=function(){var c=a.document.getElementById("map");c.style.height=a.innerHeight.toString()+"px",b.loadMap()},c};a.directive("onLoadMap",["$window","Map",b])}(angular.module("mapTractorApp"));