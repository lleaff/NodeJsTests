"use strict";

process.title = 'basicReadline';

var stdin = (function() {
  return (process
          .openStdin()
          .addListener('data', readLine));
})();

function readLine (input) {
  if (!testQuit(input))
    return;
  input = ((input && input.toString().trim()) || 'nothing');
  console.log('This be ' + input + '... y\'know?');
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
