import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "normalize.css";

let ipcRenderer;
if (window.require) {
  ipcRenderer = window.require("electron").ipcRenderer;
}

Vue.config.productionTip = false;
Vue.prototype.$ipcRenderer = ipcRenderer;

//禁止用户选择文字
document.addEventListener("selectstart", e => {
  e.preventDefault();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
