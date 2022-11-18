"use strict";

var add = function add(x, y) {
  this.result = x + y;
};
var obj = {};

// 1. apply()
add.apply(obj, [3, 4]);
// 2. call()
add.call(obj, 3, 4);
// 3. bind()
add = add.bind(obj);
add(3, 4);
console.log(obj); // result : 7