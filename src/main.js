import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify';
import store from '@/store/store';
import http from "@/plugins/http";
import { routes } from "@/routes";

Vue.config.productionTip = false
Vue.prototype.$http = http;

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
