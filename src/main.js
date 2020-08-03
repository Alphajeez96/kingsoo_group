import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faArrowLeft, faJs, faVuejs);
Vue.use(VueSidebarMenu)


Vue.component('v-select', vSelect, "font-awesome-icon", FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')