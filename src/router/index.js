import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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
