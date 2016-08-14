"use strict";

// this is a test to convert syntax from es6 to es5
var arr = [1, 2, 3];
var squares = arr.map(function (x) {
  return x * x;
});

var add = function add(a, b) {
  return a + b;
};