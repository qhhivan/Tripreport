import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue'),
  },
  {
    path: '/',
    name: 'Trips',
    component: () => import('../views/Trips.vue'),
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: () => import('../views/Pictures.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
