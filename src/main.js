import Vue from 'vue';
import App from './App.vue';
import mondaySdk from 'monday-sdk-js';

Vue.prototype.monday = mondaySdk();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
