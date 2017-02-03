'use strict';

angular.module('finAdviseApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {

    // Use the User $resource to fetch all users
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.clients = [];

    $http.get('/api/clients/myclients').success(function(clients) {
      $scope.clients = clients;
    });

    $scope.getCurrentUser = Auth.getCurrentUser;
    //console.log($scope.getCurrentUser());
  });
