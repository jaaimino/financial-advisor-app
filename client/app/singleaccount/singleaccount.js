'use strict';

angular.module('finAdviseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('singleaccount', {
        url: '/myclients/:id/account/:accid',
        templateUrl: 'app/singleaccount/singleaccount.html',
        controller: 'SingleAccountCtrl'
      });
  });