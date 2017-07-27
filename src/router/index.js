import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import hello from '@/components/hello'
import play from '@/components/play'
import search from '@/components/search'
import user from '@/components/user'
import library from '@/components/library'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/index',
      name: 'user',
      component: user,
      meta: { keepAlive: true }
    },
    {
      path: '/library',
      name: 'library',
      component: library,
      meta: { keepAlive: true }
    },
    {
      path: '/play',
      name: 'playing',
      component: play,
      meta: { keepAlive: true }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: { keepAlive: true }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta: {keepAlive: false} 
    }
  ]
})
