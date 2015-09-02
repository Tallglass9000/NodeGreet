'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('greet', function() {
  it('should greet someone by name', function() {
    expect(greet('test')).to.eql('hello test');
  });
  it('should solve all the world\'s problems'); //pending test
});