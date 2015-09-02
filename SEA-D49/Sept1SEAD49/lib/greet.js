'use strict';

//set exports equal to module.exports (empty object)
//replace empty object with a function

var greet = module.exports = exports = function(name) {
  debugger; /*jshint ignore:line */
  return 'hello ' + name;
};

greet('some person');