function mapExec(functions, args) {
  args = args.concat(Array.prototype.slice.call(arguments, 2));
  return functions.map(function (fn) {
    return fn.apply(args);
  });
}

exports.mapExec = mapExec;
