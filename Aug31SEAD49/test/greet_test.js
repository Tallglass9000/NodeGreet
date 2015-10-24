'use strict';

var greet = require('../greet');
var greetExports = require('../greet_exports')
var chai = require('chai');
var expect = chai.expect;

//line 8 and line 4 and 5 are equivalent.
var expect2 = require('chai').expect;

//'greet' does not necessarily refer to same greet, just makes it easier to understand what's going on
describe('greet', function (name) {
  it('should return hello + name', function () {
    expect(greet()).to.eql('hello ' + name);
  });
});

describe('greet exports', function () {
  it('should also greet when called', function () {
    expect(greetExports.greet()).to.eql('hello world from greet exports');
  });
});