'use strict';

describe('Controller: SingleclientCtrl', function () {

  // load the controller's module
  beforeEach(module('emoneyAdviseApp'));

  var SingleclientCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingleclientCtrl = $controller('SingleclientCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
