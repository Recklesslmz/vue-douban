import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '../page/Register'
import Login from '../page/Login'
import home from '../page/home'
import movieDetail from '../page/movieDetail'
import rank from '../page/rank'

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
    },
    {
      path: '/movieDetail/:id',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    }
  ]
})
