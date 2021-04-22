import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入ele插件
import { ele } from '@/plugins'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  // 注入新实例
  plugins: [ele],
  store,
  render: h => h(App)
}).$mount('#app')
