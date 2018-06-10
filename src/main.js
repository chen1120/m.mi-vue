import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'nprogress/nprogress.css'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'
import fetch from './api/fetch.js'
import VueLazyload from 'vue-lazyload'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })
Vue.use(VueLazyload)
Vue.prototype.$fetch = fetch
Vue.prototype.$NProgress = NProgress
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // NProgress.start()
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
