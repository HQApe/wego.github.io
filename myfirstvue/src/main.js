import Vue from 'vue'
import App from './App.vue'

// import vConsole from './assets/js/vconsole'

import router from './router/router'
import store from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.silent = true
Vue.config.devtools = false
Vue.config.errorHandler = function(err, vm, info) {
  console.log("OnError===", err, vm, info)
}

Vue.config.warnHandler = function (warn, vm, info) {
  console.log("OnWarnning====",warn, vm, info)
}

Vue.config.performance = true

new Vue({
  el:"#app",
  render:h=>h(App),
  router,
  store
}).$mount('#app')