'use strict';

angular.module('myApp.openlayer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/openlayer', {
    templateUrl: 'openlayer/openlayer.html',
    controller: 'OpenLayerViewCtrl'
  });
}])

.controller('OpenLayerViewCtrl', [function() {

  var mapol = new OpenLayers.Map('mapol');
  var wms = new OpenLayers.Layer.WMS(
      "OpenLayers WMS",
      "http://vmap0.tiles.osgeo.org/wms/vmap0",
      {'layers': 'basic'} 
  );

  mapol.addLayer(wms);



// .~.~.~.~.~.~ 
  var dm_wms = new OpenLayers.Layer.WMS(
      "Canadian Data",
      "http://www2.dmsolutions.ca/cgi-bin/mswms_gmap",
      {
          layers: "bathymetry,land_fn,park,drain_fn,drainage," +
                  "prov_bound,fedlimit,rail,road,popplace",
          transparent: "true",
          format: "image/png"
      },
      {isBaseLayer: false}
  );

  mapol.addLayer(dm_wms);


/*
  Adding a Vector Marker to the Map¶
To add a single marker at a latitude and longitude to the map, you can use a Vector Layer to add an overlay.
*/

var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
var feature = new OpenLayers.Feature.Vector(
  new OpenLayers.Geometry.Point(-71, 42),
  {some:'data'},
  {externalGraphic: 'img/marker.png', graphicHeight: 21, graphicWidth: 16});

vectorLayer.addFeatures(feature);
mapol.addLayer(vectorLayer);


}]);