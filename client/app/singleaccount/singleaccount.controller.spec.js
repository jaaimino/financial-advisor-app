'use strict';


describe('Controller: SingleaccountCtrl', function () {

  // load the controller's module
  beforeEach(module('finAdviseApp'));

  var SingleAccountCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    //Mock client
    $httpBackend.expectGET('/api/clients/myclients/abc')
      .respond({
          name: 'John Doe', 
          email: 'johndoe@gmail.com',
          description: 'Oldest and most important client. Do not lose!' 
      });

    //Mock client account
    $httpBackend.expectGET('/api/clients/myclients/abc/account/abcd')
      .respond({
          name: 'Fake Emoney Site ;)',
          description: 'My fake eMoney bank account for testing!',
          client: 'a'
      });

    scope = $rootScope.$new();
    SingleAccountCtrl = $controller('SingleAccountCtrl', {
      $scope: scope,
      $stateParams: {id: 'abc', accid: 'abcd'}
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.client).toEqual({
          name: 'John Doe', 
          email: 'johndoe@gmail.com',
          description: 'Oldest and most important client. Do not lose!'
      });
    
    expect(scope.account).toEqual({
          name: 'Fake Emoney Site ;)',
          description: 'My fake eMoney bank account for testing!',
          client: 'a'
      });
  });
});

