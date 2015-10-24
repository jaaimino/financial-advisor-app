'use strict';

angular.module('finAdviseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myclients', {
        url: '/myclients',
        templateUrl: 'app/myclients/myclients.html',
        controller: 'MyClientsCtrl',
        authenticate: true
      });
  });