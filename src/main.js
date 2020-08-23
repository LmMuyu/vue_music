import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "normalize.css";

let ipcRenderer 
if (window.require) {
  ipcRenderer = window.require("electron").ipcRenderer
}

Vue.config.productionTip = false;
Vue.prototype.$ipcRenderer  = ipcRenderer

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
