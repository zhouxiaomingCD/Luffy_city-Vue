// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import IndexCss from '@/css/index.css';
import LuffyNav from "@/components/Common/LuffyNav.vue"
import Axios from 'axios'
import Router from 'vue-router'

Vue.prototype.$http=Axios; //注册全局可以使用Axios
Axios.defaults.baseURL = 'https://www.luffycity.com/api/v1';
Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */

const originalPush = Router.prototype.push; //解决使用$router.push报错NavigationDuplicated
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.component(LuffyNav.name,LuffyNav); //注册导航栏为全局组件
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
