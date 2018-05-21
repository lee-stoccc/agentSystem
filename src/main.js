// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Footer from './components/footer/Footer.vue'



Vue.component('Footer',Footer)
Vue.config.productionTip = false
Vue.prototype.go = function (name,params) {
    router.push({name:name,params:params})
}
Vue.prototype.asdfsdfsadf = 'sdfsfsdfsdfsd1123'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
