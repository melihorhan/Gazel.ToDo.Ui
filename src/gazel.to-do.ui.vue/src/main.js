import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios'

import jQuery from 'jquery'
import bootstrap from 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
global.jQuery = jQuery
global .$ = jQuery


Vue.config.productionTip = false;
Vue.prototype.$http = axios
  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
