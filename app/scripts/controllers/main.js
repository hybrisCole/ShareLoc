'use strict';

angular.module('shareLocApp')
  .controller('MainCtrl', function ($scope,$window) {
    $('#share-loc-map').height($window.innerHeight);
    console.log(GMaps);
    new GMaps({
      div: '#share-loc-map',
      lat: -12.043333,
      lng: -77.028333
    });
  });
