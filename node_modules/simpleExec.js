var exec = require('child_process').exec;

exports.simpleExec = function() {
  var argsStr = Array.prototype.reduce.call(
    arguments, function (prev, val, i) {
      return prev + (i ? ' ' : '') + val;
    }, '');
  exec(argsStr);
  return (argsStr);
};
