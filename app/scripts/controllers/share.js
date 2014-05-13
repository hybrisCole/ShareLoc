'use strict';

angular.module('shareLocApp')
  .controller('ShareCtrl', function ($scope, facebookservice,Coordenadaservice) {
    $scope.friends = [];
    facebookservice.friends().then(function(friends){
      //$scope.friends = friends;
    },function(error){
      console.log(error);
    },function(friend){
      $scope.friends.push(friend);
    });
  });
