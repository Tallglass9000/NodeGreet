'use strict';

//The following code is from https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input

var prompt = require('prompt');
prompt.start();

prompt.get(['name'], function (err, result) {
  if (err) {
    return onErr(err);
  }
  console.log('hello ' + result.name);
});

function onErr(err) {
  console.log(err);
  return 1;
}

module.exports = function(name) {
  return 'hello ' + name;
};

