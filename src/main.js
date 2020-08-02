import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')