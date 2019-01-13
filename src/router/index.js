import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/spider/Login'
import Home from '@/components/spider/Home'
import Overview from '@/components/spider/Overview'
import Claim from '@/components/spider/Claim'
import Timesheet from '@/components/spider/Timesheet'
import Forecast from '@/components/spider/Forecast'
import Elearning from '@/components/spider/Elearning'

Vue.use(Router)

// 当页面刷新的时候，或者按返回按钮退到登陆页面的时候，要用路由守卫

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
        {path: '', component: Overview},
        {path: 'overview', component: Overview},
        {path: 'claim', component: Claim},
        {path: 'timesheet', component: Timesheet},
        {path: 'forecast', component: Forecast},
        {path: 'e-learning', component: Elearning}
      ]
    }
  ]
})
