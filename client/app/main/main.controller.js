'use strict';

angular.module('emoneyAdviseApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $scope.awesomeThings = [];

    $scope.getCurrentUser = Auth.getCurrentUser;
    //console.log($scope.getCurrentUser());

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Clients'];
    $scope.data = [
      [65, 59, 80, 81, 72, 68, 80]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  });
