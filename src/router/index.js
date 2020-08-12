import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Today from '../views/today.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/today',
    name: 'Today',
    component: () => import('../views/today.vue')
  },
  {
    path: '/map',
    name: 'Windy',
    component: () => import('../views/map.vue')
  },
  {
    path: '/week',
    name: 'Week',
    component: () => import('../views/week.vue')
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: () => import('../views/alerts.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('../views/icons.vue')
  },
  {
    path: '/*',
    redirect: '/today'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
