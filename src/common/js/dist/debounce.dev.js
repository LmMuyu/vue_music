"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function debounce(func) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    leading: true,
    context: null
  };
  var timer = null;

  function _debounce() {
    for (var _len = arguments.length, agrs = new Array(_len), _key = 0; _key < _len; _key++) {
      agrs[_key] = arguments[_key];
    }

    if (timer) {
      clearTimeout(timer);
    }

    if (options.leading && !timer) {
      timer = setTimeout(null, time);
      func.aplly(options.context, agrs);
    } else {
      timer = setTimeout(function () {
        func, apply(options.leading, agrs);
        timer = null;
      }, time);
    }
  }

  _debounce.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return _debounce;
}

var _default = debounce;
exports["default"] = _default;