require('angular/angular');
var angular = window.angular;

var beveragesApp = angular.module('beveragesApp', []);

require('./services/services')(beveragesApp);
require('./directives/directives')(beveragesApp);
require('./filters/filters')(beveragesApp);
require('./beverages/beverages')(beveragesApp);