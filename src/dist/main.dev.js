"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./registerServiceWorker");

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("./plugins/element.js");

require("normalize.css");

require("@/plugins/swiper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ipcRenderer;

if (window.require) {
  ipcRenderer = window.require("electron").ipcRenderer;
}

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$ipcRenderer = ipcRenderer; //禁止用户选择文字

document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");