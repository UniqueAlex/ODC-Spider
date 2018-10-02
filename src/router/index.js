import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/spider/Login'
import Home from '@/components/spider/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
