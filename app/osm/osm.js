'use strict';

angular.module('myApp.osm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/osm', {
    templateUrl: 'osm/osm.html',
    controller: 'OSMViewCtrl'
  });
}])

.controller('OSMViewCtrl', [function() {


    var mymap = L.map('mapid').setView([40, -74.50], 9);

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {

        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        accessToken: 'pk.eyJ1IjoiZGVubmlzYmFsaXRvbiIsImEiOiJjaXp0M2JobGQwMGR0MndwYjkzajJuaTlnIn0.uGxmlP6RoWi3QlCrsCpNvA'

    }).addTo(mymap);

    /* DBz */
    function initGeolocation() {
        if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success, fail );
        }
        else
        {
           alert("Sorry, your browser does not support geolocation services.");
        }
    }

     function success(position) {
         document.getElementById('long').value = position.coords.longitude;
         document.getElementById('lat').value = position.coords.latitude
     }

     function fail() {
        // Could not obtain location
     }


}]);