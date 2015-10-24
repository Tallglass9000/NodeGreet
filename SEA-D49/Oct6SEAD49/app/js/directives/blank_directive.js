module.exports = function (app) {
  console.log("Hey, this is blankDirective firing");
  app.directive('blankDirective', function () {
    return {
      restrict: 'A', 
      replace: true,
      templateUrl: '/templates/directives/blank_directive_template.html',
      scope: {
        foo: '=',
        bar: '@',
        greeting: '@'
      },
      controller: function ($scope) {
        $scope.greeting = $scope.greeting || 'super cool, magic unicorns, there you go';
      }
    };
  });
};