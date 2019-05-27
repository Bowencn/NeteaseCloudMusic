import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/content/home.vue'
import songList from '@/components/content/songList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'songList',
      component:songList
      // component: require('@/components/content/home.vue').default
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/songList',
      component:songList
    }
  ]
})
