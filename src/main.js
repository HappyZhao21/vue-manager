import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'
import router from "./router";
import store from './store'

import http from 'axios'
import './api/mock'

//阻止启动生产消息，常用作指令
Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$http = http




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
