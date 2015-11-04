"use strict";

console.log(require('path').basename(__filename, '.js'));

var readLine = require('./readline').readLine;

function testQuit(input) {
  switch(input && input.toString().trim().toLowerCase()) {
  case 'q':
  case 'quit':
    process.stdin.pause();
    return (false);
  default:
    return (true);
  }
}

function readLoop(callback) {
  readLine(function(e) {
    callback(e);
    readLoop(callback);
  });
}

function prompt(callback, options) {
  if (typeof options !== 'object') options = {};
  if (options.quit === undefined) options.quit = true;

  readLine(function (input) {
    if (options.quit && !testQuit(input))
      return (false);
    else
      return (input);
  }, options.str);
}

module.exports = {
  readLoop: readLoop,
  testQuit: testQuit,
  prompt: prompt
};
