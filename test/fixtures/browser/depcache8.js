System.register(['./depcache9.js'], function(_export) {
  var dep;
  return {
    setters: [function (_dep) { dep = _dep.default }],
    execute: function () {
      _export('default', dep);
    }
  };
});