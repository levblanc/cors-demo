import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.$ajax = axios;

Vue.$checkCookie = () => {
  const cookieStr = document.cookie;
  const cookieArr = cookieStr.split('; ');
  const cookieMap = {};

  cookieArr.forEach((item) => {
    const [key, value] = item.split('=');
    cookieMap[key] = value;
  });

  return !!cookieMap['csrf-test'];
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
