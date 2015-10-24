require(__dirname + '/../../app/js/client');
require('angular-mocks');

describe('beverages controller', function () {
  var $httpBackend;
  var $ControllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('beveragesApp'));

  beforeEach(angular.mock.inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function () {
    var controller = new $ControllerConstructor('BeveragesController', {$scope: $scope});
    expect(typeof $scope).toBe('object');
    expect(typeof controller).toBe('object');
    expect(Array.isArray($scope.beverages)).toBe(true);
  });

  describe('REST requests', function () {
    beforeEach(angular.mock.inject(function (_$httpBackend_, $rootScope) {
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
      $ControllerConstructor('BeveragesController', {$scope: $scope});
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a get request when getAll() is called', function () {
      $httpBackend.expectGET('/api/beverages').respond(200, [{beverageBody: 'test beverage'}]);
      $scope.getAll();
      $httpBackend.flush();
      expect($scope.beverages[0].beverageBody).toBe('test beverage');
    });

    it('should be able to create a beverage', function () {
      $httpBackend.expectPOST('/api/beverages', {beverageBody: 'send test beverage'}).respond(200, {_id: 1, beverageBody: 'test beverage'});
      $scope.newBeverage = {beverageBody: 'hello'};
      $scope.createBeverage({beverageBody: 'send test beverage'});
      $httpBackend.flush();
      expect($scope.beverages[0].beverageBody).toBe('test beverage');
      expect($scope.newBeverage).toBe(null);
    });

    it('should be able to update a beverage', function () {
      var beverage = {beverageBody: 'test beverage', +id: 1, editing: true};
      $httpBackend.expectPUT('/api/beverages/1', beverage).respond(200);
      $scope.updateBeverage(beverage);
      $httpBackend.flush();
      expect(beverage.editing).toBe(false);
    });

    it('should be able to delete a beverage', function () {
      var beverage = {beverageBody: 'test beverage', _id: 1};
      $scope.beverages = [beverage];
      $httpBackend.expectDELETE('/api/beverages/1').respond(200);
      $scope.removeBeverage(beverage);
      $httpBackend.flush();
      expect($scope.beverages.length).toBe(0);
      expect($scope.beverages.indexOf(beverage)).toBe(-1);
    });
  });
});