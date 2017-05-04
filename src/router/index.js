import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '../page/Register'
import Login from '../page/Login'
import home from '../page/home'
import movieDetail from '../page/movieDetail'
import rank from '../page/rank'

import movie from '../components/movie/movie'
import book from '../components/book/book'
import television from '../components/television/television'
import city from '../components/city/city'
import music from '../components/music/music'

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
      component: home,
      children: [
        {
          path: '/home/',
          component: movie
        },
        {
          path: '/home/book',
          component: book
        },
        {
          path: '/home/television',
          component: television
        },
        {
          path: '/home/city',
          component: city
        },
        {
          path: '/home/music',
          component: music
        }

      ]
    },
    {
      path: '/movieDetail/:id',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path: '/rank/:id',
      name: 'rank',
      component: rank
    }
  ]
})
