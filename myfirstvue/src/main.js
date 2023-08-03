import Vue from 'vue'
import App from './App.vue'

// import vConsole from './assets/js/vconsole'

import router from './router/router'
import store from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  el:"#app",
  render:h=>h(App),
  router,
  store
}).$mount('#app')