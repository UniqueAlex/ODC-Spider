import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/spider/Login'
import Home from '@/components/spider/Home'
import Overview from '@/components/spider/Overview'
import Claim from '@/components/spider/Claim'

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
      component: Home,
      children: [
        {path: '', name: Overview, component: Overview},
        {path: 'overview', name: Overview, component: Overview},
        {path: 'claim', name: Claim, component: Claim}
      ]
    }
  ]
})
