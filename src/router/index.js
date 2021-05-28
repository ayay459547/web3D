import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Moon = () => import("../views/Moon.vue")
const Cube = () => import("../views/Cube.vue")
const Forest = () => import("../views/Forest.vue")
const Swiper = () => import("../views/Swiper.vue")

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/moon',
    name: 'Moon',
    component: Moon
  },
  {
    path: '/cube',
    name: 'Cube',
    component: Cube
  },
  {
    path: '/forest',
    name: 'Forest',
    component: Forest
  },
  {
    path: '/swiper',
    name: 'Swiper',
    component: Swiper
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
