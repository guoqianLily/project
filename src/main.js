// import Vue from 'vue'
import Vue from 'vue'
import ElementUI from 'element-ui';
import './utils/rem'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import commonUI from './common'

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
  
  });
Vue.use(ElementUI);
Vue.use(commonUI);

Vue.prototype.$center = new Vue;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')