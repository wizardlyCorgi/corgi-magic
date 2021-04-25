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
// 进度条速度，一般不用控制自行加载
// NProgress.inc(0.2);
NProgress.configure({
  // easing: 'ease',  // 动画方式
  speed: 100, // 递增进度条的速度
  showSpinner: false // 是否显示加载ico
  // trickleSpeed: 200, // 自动递增间隔
  // minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach((to, from, next) => {
  NProgress.start() // 显示进度条
  next()
})

router.afterEach(() => {
  NProgress.done() // 完成进度条
})

export default router
