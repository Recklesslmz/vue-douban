import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '../page/Register'
import Login from '../page/Login'
import home from '../page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Register',
      component: Register

    },
    {
      path: '/',
      component: Login

    },
    {
      path: '/home',
      component: home

    }
  ]
})
