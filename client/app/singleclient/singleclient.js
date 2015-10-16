'use strict';

angular.module('emoneyAdviseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('singleclient', {
        url: '/myclients/:id',
        templateUrl: 'app/singleclient/singleclient.html',
        controller: 'SingleclientCtrl'
      });
  });