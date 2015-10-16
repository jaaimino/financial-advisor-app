'use strict';

angular.module('emoneyAdviseApp')
  .controller('MyClientsCtrl', function ($scope, $http, $log, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.clients = Auth.getCurrentUser().clients;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 256;
    $scope.bigCurrentPage = 1;

    $scope.selected = undefined;

    /*
    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
    */
  });
