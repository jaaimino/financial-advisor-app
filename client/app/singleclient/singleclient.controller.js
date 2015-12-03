'use strict';

angular.module('finAdviseApp')
  .controller('SingleClientCtrl', function ($scope, $stateParams, $http) {
    var clientId = $stateParams.id;
    $scope.client = {};
    $scope.accounts = [];
    $scope.newAccount = {};

    $http.get('/api/clients/myclients/' + clientId).success(function(client) {
      $scope.client = client;
    });

    $http.get('/api/clients/myclients/' + clientId + '/accounts').success(function(accounts) {
      $scope.accounts = accounts;
    });

    $scope.refreshdata = function(){
      $http.get('/api/clients/myclients/' + clientId + '/accounts/refresh').success(function(accounts) {
        //console.log(accounts);
      });
    };

    $scope.addAccount = function(form){
      if(form.$valid) {
        var data = $scope.newAccount;
        data.client = clientId;
        $http.post('/api/clients/myclients/' + clientId + '/accounts', data).success(function(account) {
          $scope.accounts.push(account);
          $scope.clearAccount();
        }).error(function(err, data){
          console.log(err);
        });
      }
    }

    $scope.clearAccount = function(){
      $scope.newAccount = {};
    }

    $scope.deleteAccount = function(account){
      $http.delete('/api/clients/myclients/' + clientId + '/account/' + account._id).success(function(response) {
        var index = $scope.accounts.indexOf(account);
        if (index > -1) {
            $scope.accounts.splice(index, 1);
        }
      }).error(function(err, data){
        console.log(err);
      });
    }

  });
