'use strict';

angular.module('finAdviseApp')
  .controller('MyClientsCtrl', function ($scope, $http, $log, Auth) {

    // Use the User $resource to fetch all users
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.clients = [];

    $http.get('/api/clients/myclients').success(function(clients) {
      $scope.clients = clients;
    });

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = $scope.clients.length;
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
