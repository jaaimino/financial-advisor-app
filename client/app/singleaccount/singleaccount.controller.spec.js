'use strict';

describe('Controller: SingleaccountCtrl', function () {

  // load the controller's module
  beforeEach(module('emoneyAdviseApp'));

  var SingleaccountCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingleaccountCtrl = $controller('SingleAccountCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
