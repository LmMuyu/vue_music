"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Observer =
/*#__PURE__*/
function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this.bus = {};
  } //发布


  _createClass(Observer, [{
    key: "trigger",
    value: function trigger(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var list = this.bus[type];
      list.forEach(function (itme) {
        itme(args);
      });
    } //订阅

  }, {
    key: "on",
    value: function on(type, fn) {
      var key = this.bus[type];
      key === undefined ? this.bus[key] = [fn] : key.push(fn);
    } //取消订阅

  }, {
    key: "off",
    value: function off(type, fn) {
      var key = this.bus[type];
      if (!key) return;
      var index = key.findIndex(function (itme) {
        return itme === fn;
      });
      key.splice(index, 1);
      if (key.length === 0) delete this.bus[type];
    } //只发布一次

  }, {
    key: "once",
    value: function once(type, fn) {
      var _this = this;

      var oneEvent = function oneEvent(args) {
        fn(args);

        _this.off(type, oneEvent);
      };

      this.on(type, oneEvent);
    }
  }]);

  return Observer;
}();