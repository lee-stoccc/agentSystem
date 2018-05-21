// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Footer from './components/footer/Footer.vue'
import axios from 'axios'
import qs from 'qs'


Vue.prototype.$axios = axios;

Vue.component('Footer',Footer);
Vue.config.productionTip = false;

//封装的路由跳转函数
Vue.prototype.go = function (name,params) {
    router.push({name:name,params:params})
};

// 网络请求封装函数
Vue.prototype.http= function (url,data) {
    this.$axios.post(url,data,{
            transformRequest:[function (data) {
                // 对 data 进行任意转换处理
                let ret = '';
                for (let it in data){
                    ret += encodeURIComponent(it)+'='+encodeURIComponent(data[it])+'&'
                }
                return ret   // return this.$qs.stringify(data);
            }],
            headers:{"Content-Type":'application/x-www-form-urlencoded;charset=UTF-8'}
        }).then(res=>{
        console.log('网络请求成功');
        console.log(res)
    })
};

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
