exports.exportPaths = function exportPaths(paths) {
  var exports = [];
  paths.forEach(function (modulePath) {
    var moduleName = basename(modulePath);
    exports[moduleName] = require(modulePath)[moduleName];
  });
  return exports;
};

function basename(pathStr) {
  return pathStr.match(/(\w+)(?:(?:\.\w+)?$)/)[1];
};
