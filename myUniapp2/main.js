import App from './App'
import store from './store/index.js'

// #ifndef VUE3
import Vue from 'vue'

// 引入uview-ui组件库
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// 全局注册组件
import detail from './components/detail.vue'
Vue.component('detail', detail)

import navCustom from './components/nav-custom.vue'
Vue.component('nav-custom',navCustom)

import titleBlock from './pages/home/components/title-block.vue'
Vue.component('title-block',titleBlock)

import goodFood from './components/good-food.vue'
Vue.component('good-food',goodFood)

import request from './utils/api.js'
for (let key in request) {
	Vue.prototype[key] = request[key]
}

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif