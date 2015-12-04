'use strict';

angular.module('finAdviseApp')
  .controller('MyClientsCtrl', function ($scope, $http, $log, Auth) {

    // Use the User $resource to fetch all users
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.clients = [];
    $scope.newClient = {};
    $scope.btnColor = "btn-default";

    $http.get('/api/clients/myclients').success(function(clients) {
      $scope.clients = clients;
    });

    $scope.refreshdata = function(){
      $scope.btnColor = "btn-warning";
      $http.get('/api/clients/myclients/refresh').success(function(accounts) {
        $scope.btnColor = "btn-success";
      });
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
  });
