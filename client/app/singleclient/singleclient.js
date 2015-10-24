'use strict';

angular.module('finAdviseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('singleclient', {
        url: '/myclients/:id',
        templateUrl: 'app/singleclient/singleclient.html',
        controller: 'SingleClientCtrl'
      });
  });