function curry(fn) {
  var args = Array.prototype.slice(arguments, 1);
  return function curried() {
    args = args.concat(Array.prototype.slice.call(arguments));
    if (args.length >= fn.length)
      return fn.apply(this, args);
    else
      return curry(fn, args);
  };
}

module.exports = { curry: curry };
