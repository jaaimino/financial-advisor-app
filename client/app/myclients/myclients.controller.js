'use strict';

angular.module('finAdviseApp')
  .controller('MyClientsCtrl', function ($scope, $http, $log, Auth) {

    // Use the User $resource to fetch all users
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.clients = [];
    $scope.newClient = {};

    $http.get('/api/clients/myclients').success(function(clients) {
      $scope.clients = clients;
    });

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.addClient = function(form){
      if(form.$valid) {
        var data = $scope.newClient;
        data.advisor = $scope.getCurrentUser()._id;
        $http.post('/api/clients/myclients/', data).success(function(client) {
          $scope.clients.push(client);
          $scope.clearClient();
        }).error(function(err, data){
          console.log(err);
        });
      }
    }

    $scope.clearClient = function(){
      $scope.newClient = {};
    }

    $scope.deleteClient = function(client){
      $http.delete('/api/clients/myclients/'+client._id).success(function(response) {
        var index = $scope.clients.indexOf(client);
        if (index > -1) {
            $scope.clients.splice(index, 1);
        }
      }).error(function(err, data){
        console.log(err);
      });
    }

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
