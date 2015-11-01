"use strict";

exports.printArray = function (arr, delim) {
  if (delim === undefined) delim = '\n';

  console.log(arr.reduce(function (pre, val, i) {
    return pre + (i > 0 ? delim : '') + val.toString();
  }), '');
};
