import Vue from "vue";
import App from "./App.vue";
import "./filters/date-filter"
import router from "./router";
import store from "./store";

import axios from 'axios'

import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

Vue.use(VueToast);

Vue.use(VueToast, {
  // One of options
  position: 'top-right'
})

global.jQuery = jQuery
global .$ = jQuery


Vue.config.productionTip = false;
Vue.prototype.$http = axios
  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
