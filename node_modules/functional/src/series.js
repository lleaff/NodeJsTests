function series(fn1, fn2)
{
  var functions = Array.prototype.slice.call(arguments);
  return function () {
    var args = arguments;
    var val;
    functions.forEach(function (fn) {
      val = fn.apply(this, args);
    });
    return val;
  };
}

module.exports = {
  series: series
};
