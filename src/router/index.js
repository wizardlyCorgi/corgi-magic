import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/test-component/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/test-component/About.vue'
      )
  },
  {
    path: '/element-test',
    name: 'Test',
    component: () => import('@/views/test-component/element-test')
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('@/views/test-component/transition')
  },
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('@/views/home/HomePage')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start() // 显示进度条
  next()
})

router.afterEach(() => {
  NProgress.done() // 完成进度条
})
export default router
