module.exports = function (app) {
  app.controller('BeveragesController', ['$scope', 'Resource', '$http', function ($scope, Resource, $http) {
    $scope.beverages = [];
    $scope.newBeverage = {};
    var beverageResource = Resource('beverages');
    $scope.description = 'This is the beverages app';

    $scope.printDescription = function (description) {
      console.log('from the function: ' + description);
      console.log('from $scope: ' + $scope.description);
    };

    $scope.getAll = function () {
      beverageResource.getAll(function (err, data) {
        if (err) return console.log(err);
        $scope.beverages = data;
      });
    };

    $scope.createBeverage = function (beverage) {
      beverageResource.create(beverage, function (err, data) {
        if (err) return console.log(err);
        $scope.newBeverage = {};
        $scope.beverages.push(data);
      });
    };

    $scope.updateBeverage = function (beverage) {
      console.log(beverage);
      beverageResource.update(beverage, function (err) {
        beverage.editing = false;
        if (err) return console.log(err);
      });
    };

    $scope.removeBeverage = function (beverage) {
      beverageResource.remove(beverage, function (err) {
        if (err) return console.log(err);
        $scope.beverages.splice($scope.beverages.indexOf(beverage), 1);
      });
    };
  }]);
};