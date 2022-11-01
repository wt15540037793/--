import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
    children:[
      {
        path: '/home1',
        name: 'home1',
        component: () => import('../views/home1.vue')
      },
      {
        path: '/home2',
        name: 'home2',
        component: () => import('../views/home2.vue')
      },
      {
        path: '/home3',
        name: 'home3',
        component: () => import('../views/home3.vue')
      },
      {
        path: '/home4',
        name: 'home4',
        component: () => import('../views/home4.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
