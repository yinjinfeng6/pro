import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './style/index.css'; //  全局样式
import './assets/font/iconfont.css';  // 图标

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  require('./mock/index')
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
