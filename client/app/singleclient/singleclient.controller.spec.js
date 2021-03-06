'use strict';


describe('Controller: SingleClientCtrl', function () {

  // load the controller's module
  beforeEach(module('finAdviseApp'));

  var SingleClientCtrl,
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
    $httpBackend.expectGET('/api/clients/myclients/abc/accounts')
      .respond([{
          name: 'Fake Emoney Site ;)',
          description: 'My fake eMoney bank account for testing!',
          client: 'a'
      }]);

    scope = $rootScope.$new();
    SingleClientCtrl = $controller('SingleClientCtrl', {
      $scope: scope,
      $stateParams: {id: 'abc'}
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.client).toEqual({
          name: 'John Doe', 
          email: 'johndoe@gmail.com',
          description: 'Oldest and most important client. Do not lose!'
      });
    
    expect(scope.accounts).toEqual([{
          name: 'Fake Emoney Site ;)',
          description: 'My fake eMoney bank account for testing!',
          client: 'a'
      }]);
  });
});

