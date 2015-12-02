'use strict';

angular.module('finAdviseApp')
  .controller('SingleAccountCtrl', function ($scope, $stateParams, $http) {
    var clientId = $stateParams.id;
    var accountId = $stateParams.accid;
    $scope.client = {};
    $scope.account = {};

    $http.get('/api/clients/myclients/' + clientId).success(function(client) {
      $scope.client = client;
    });

    $http.get('/api/clients/myclients/' + clientId + '/account/' + accountId).success(function(account) {
      $scope.account = account;
    });

    $scope.refreshdata = function(){
      $http.get('/api/clients/myclients/' + clientId + '/account/'+ accountId +'/refresh').success(function() {
        $http.get('/api/clients/myclients/' + clientId + '/account/' + accountId).then(function(data){
          $scope.account = data.data;
        });
      });
    };

    $scope.getSubAccountDetails = function(subaccount, collapsed){
      if(!collapsed){
        $http.get('/api/clients/myclients/' + clientId + '/account/' +
          accountId + '/subaccount/' + subaccount._id).success(function(detailsubaccount) {
            subaccount.transactions = detailsubaccount.transactions;
        });
      }
    };

  });
