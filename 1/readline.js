"use strict";

process.title = 'basicReadline';

function readLine (callback) {
  var stdin = process.openStdin();
  stdin.addListener('data', function(e) {
    var str = e.toString();
    callback(str.substr(0, str.length - 1));
    stdin.removeListener('data', callback);
    stdin.pause();
  });
}

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

function processInput(input) {
  if (!testQuit(input))
    return;
  input = ((input && input.toString().trim()) || 'nothing');
  console.log('This be ' + input + '... y\'know?');
}

readLine(processInput);
