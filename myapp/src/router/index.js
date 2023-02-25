import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../views/Home.vue'
import MoreActionBtn from '../components/MoreActionBtns.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/more',
    name: 'MoreActionBtn',
    component: MoreActionBtn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
