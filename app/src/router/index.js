import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'LoginBase',
    component: Login
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/results',
    name: 'results',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Results.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
