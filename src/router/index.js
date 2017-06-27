import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import hello from '@/components/hello'
import play from '@/components/play'
import search from '@/components/search'
import user from '@/components/user'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: user
    },
    {
      path: '/play',
      name: 'playing',
      component: play
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})