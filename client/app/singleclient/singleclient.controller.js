'use strict';

angular.module('emoneyAdviseApp')
  .controller('SingleClientCtrl', function ($scope, $stateParams, $http) {
    var clientId = $stateParams.id;
    $scope.client = {};
    $http.get('/api/clients/myclients/' + clientId).success(function(client) {
      $scope.client = client;
    });
    $http.get('/api/clients/myclients/' + clientId + '/accounts').success(function(accounts) {
    	console.log(accounts);
      $scope.accounts = accounts;
    });
  });
