import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/root',
    component: () => import('@/views/root/Root.vue')
  },
  {
    path: '/root',
    name: 'Root',
    component: () => import('@/views/root/Root.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
