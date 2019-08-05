import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios'

import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

global.jQuery = jQuery
global .$ = jQuery


Vue.config.productionTip = false;
Vue.prototype.$http = axios
  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
