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

    $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    $scope.series = ['Clients'];
    $scope.data = [
      [65, 59, 80, 81, 72, 68, 80]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

    $scope.labels2 = ["Basic", "Investment", "Loan"];
    $scope.data2 = [10, 4, 6];
  });
