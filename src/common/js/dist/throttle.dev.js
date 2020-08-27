"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function throttle(func) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    leading: true,
    tariling: false,
    //是否最后在触发一次节流
    context: null
  };
  var oldDate = new Date(0).getTime();
  var timer = null;

  function _throttle() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newDate = new Date().getTime();

    if (!options.leading) {
      if (timer) return;
      timer = setTimeout(function () {
        func.apply(options.context, args);
        timer = null;
      }, time);
    } else if (newDate - oldDate > time) {
      func.apply(options.context, args);
      oldDate = newDate;
    } else if (options.tariling) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        func.apply(options.context, args);
      }, time);
    }
  }

  _throttle.cancel = function () {
    oldDate = 0;
    clearTimeout(timer);
    timer = null;
  };

  return _throttle;
}

var _default = throttle;
exports["default"] = _default;