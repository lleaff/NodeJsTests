"use strict";

process.title = 'basicReadline';

/* callback(string input) */
function readLine (callback, promptStr) {
  var stdin = process.openStdin();
  function listener(e) {
    var str = e.toString();
    callback(str.substr(0, str.length - 1));
    stdin.removeListener('data', listener);
  }
  if (promptStr)
    process.stdout.write(promptStr);
  stdin.addListener('data', listener);
}

exports.readLine = readLine;
