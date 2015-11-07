function compose(fn1, fn2)
{
  var functions = Array.prototype.slice.call(arguments);
  return function () {
    return functions.reduce(function (pre, fn) {
      return fn.apply(this, pre);
    }, arguments);
  };
}

module.exports = {
  compose: compose
};
