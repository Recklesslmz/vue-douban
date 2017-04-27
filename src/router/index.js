import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '../page/Register'
import Login from '../page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Register',
      component: Register

    },
    {
      path: '/Login',
      component: Login

    }
  ]
})
