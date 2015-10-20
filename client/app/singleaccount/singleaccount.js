'use strict';

angular.module('emoneyAdviseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('singleaccount', {
        url: '/myclients/:id/account/:accid',
        templateUrl: 'app/singleaccount/singleaccount.html',
        controller: 'SingleAccountCtrl'
      });
  });