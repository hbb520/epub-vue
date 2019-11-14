import Vue from 'vue';
import 'material-design-icons/iconfont/material-icons.css'
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import '@/styles/index.scss'; // global css
//moment 将成为全局 this.$moment(xxx).format("YYYY-MM-DD HH:mm:ss")
import moment from 'moment';
import Cookies from 'js-cookie';
import App from './App';
import store from './store';
import router from './router';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);
/**
 * This project originally used easy-mock to simulate data,
 * but its official service is very unstable,
 * and you can build your own service if you need it.
 * So here I use Mock.js for local emulation,
 * it will intercept your request, so you won't see the request in the network.
 * If you remove `../mock` it will automatically request easy-mock data.
 */
import theme from 'muse-ui/lib/theme';
theme.add('teal', {
  primary: '#223FEE',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#ffeb3b',
}, 'light');

theme.use('teal');

Object.defineProperty(Vue.prototype, '$moment', {value: moment});
Vue.prototype.$Cookies = Cookies;
//定义全局跳转函数
Vue.prototype.$goLink = function (url) {
  this.$router.push({
    path: url
  });
};
Vue.prototype.$goBack = function (url) {
  this.$router.go(-1);
};

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
