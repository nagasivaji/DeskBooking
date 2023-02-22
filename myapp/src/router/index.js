import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/showMap',
    name: 'Map',
    component: Map
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
