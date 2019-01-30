
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  Header from "./components/HeaderComponent.vue"
import  HelloWorld from "./components/HelloWorld.vue"

Vue.config.productionTip = false


Vue.component("HeaderComponent",Header);
Vue.component("HelloWorld",HelloWorld);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
