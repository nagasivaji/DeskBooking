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
// app.config.globalProperties.$url = 'http://localhost:8080/myapp/#'

// Booked Array
app.config.globalProperties.$bookedArray =['C1-1', 'C1-2', 'C1-4', 'CN-1', 'C3-1', 'C3-2', 'C3-4','C4-1', 'C4-4', 'C5-1', 'C5-2', 'C5-3', 'C5-4', 'C6-1', 'C6-2', 'C7-3', 'C7-1', 'C8-1', 'C8-2', 'C8-3', 'C8-4', 'C9-1', 'C9-4', 'C11-1', 'C11-2', 'C11-3', 'C12-4', 'C13-1', 'C13-2', 'C13-3', 'C14-2', 'C14-4', 'C15-1', 'C15-2', 'C15-3', 'C15-4', 'C16-2', 'C17-2', 'C18-2', 'C18-4', 'C19-3', 'C20-1', 'C20-2', 'C20-4','C21-1', 'C22-2', 'C22-4', 'C23-2', 'C23-1', 'C24-1', 'C24-2']

app.config.globalProperties.$reserverdArray = ['C1-3', 'C2-1', 'C2-2', 'C2-4', 'CN-2', 'C4-2', 'C4-3', 'C6-3', 'C7-2', 'C9-2', 'C10-2', 'C12-3', 'C12-2', 'C14-3', 'C16-1', 'C16-3', 'C17-1', 'C18-1', 'C19-2', 'C20-3', 'C21-3', 'C23-3', 'C24-3']


// Notifications
app.config.globalProperties.$showNotify = function showNotification(title, description, type) {
    this.$notification[type]({
    message: title,
    description: description
    })
}

app.use(router);
app.use(Antd);
app.mount('#app');

