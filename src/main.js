import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SearchDlg from "./components/searchDlg";
import Accordion from "./components/accordion";
import draggable from "vuedraggable";

import "./filters/filters"; 
Vue.component("SearchDlg", SearchDlg);
Vue.component("Accordion", Accordion);
Vue.component("draggable", draggable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
