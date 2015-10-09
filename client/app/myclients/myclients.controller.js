'use strict';

angular.module('emoneyAdviseApp')
  .controller('MyClientsCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.clients = Auth.getCurrentUser().clients;

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
