'use strict';

angular.module('emoneyAdviseApp')
  .controller('SingleAccountCtrl', function ($scope, $stateParams, $http) {
    var clientId = $stateParams.id;
    var accountId = $stateParams.accid;
    $scope.client = {};
    $http.get('/api/clients/myclients/' + clientId).success(function(client) {
      $scope.client = client;
    });
    $http.get('/api/clients/myclients/' + clientId + '/account/' + accountId).success(function(account) {
        console.log(account);
      $scope.account = account;
    });
  });
