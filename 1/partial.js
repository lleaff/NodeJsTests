exports.partial = function partial(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function partiallyApplied() {
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
  };
}
