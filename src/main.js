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

Vue.prototype.$http=Axios;
Axios.defaults.baseURL = 'https://www.luffycity.com/api/v1';
Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */

Vue.component(LuffyNav.name,LuffyNav);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
