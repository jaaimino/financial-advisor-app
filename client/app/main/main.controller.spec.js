'use strict';


describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('finAdviseApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/clients/myclients')
      .respond([{
          name: 'John Doe', 
          email: 'johndoe@gmail.com',
          description: 'Oldest and most important client. Do not lose!' 
      }]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.clients).toEqual([{
          name: 'John Doe', 
          email: 'johndoe@gmail.com',
          description: 'Oldest and most important client. Do not lose!'
      }]);
  });
});

