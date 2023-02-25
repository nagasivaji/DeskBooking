import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'

// ANT DESING IMPORTS
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App);
// global variable
// For LocalTesting purposes
app.config.globalProperties.$url = 'http://localhost:3030/#'

// For Production purposes
// Vue.prototype.$url = 'http://localhost:8080/myapp/#'

app.use(router);
app.use(Antd);
app.mount('#app');

