var __ = {};

function partial(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function partiallyApplied() {
    var newArgs = constructArgs(args, arguments);
    return fn.apply(this, newArgs);
  };
}

function constructArgs(args1, args2) {
  args1 = Array.prototype.slice.call(args1);
  args2 = Array.prototype.slice.call(args2);
  var l1 = args1.length;

  for (var i = 0; args2.length || i < l1; ++i) {
    if (i >= l1 || args1[i] === __)
      args1[i] = args2.shift();
  }
  return (args1);
}

module.exports = { partial: partial, _: __ };
