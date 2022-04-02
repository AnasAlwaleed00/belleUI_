import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/Input.vue')
  },
  {
    path: '/icon-button',
    name: 'Icon Button',
    component: () => import('../components/Button/IconButton.vue')
  },
  {
    path: '/banner',
    name: 'Banner',
    component: () => import('../components/Banner/Banner.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('../components/Card/Card.vue')
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('../components/Modal/Modal.vue')
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('../views/Toast.vue')
  },
  {
    path: '/accordion',
    name: 'Accordion',
    component: () => import('../views/Accordion.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
