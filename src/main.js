// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iView'
// import i18n from '@/locale'
import  VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
import './index.less'
import '@/assets/icons/iconfont.css'
import plugin from './plugins'
Vue.use(plugin)
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(iView, {
//   i18n: (key, value) => i18n.t(key, value)
// })
Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // i18n,
  store,
  components: { App },
  template: '<App/>'
})
