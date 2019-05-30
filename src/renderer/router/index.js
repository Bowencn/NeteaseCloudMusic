import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/content/home.vue'
import songList from '@/components/content/songList.vue'
import list from '@/components/content/songList/list.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'songList',ß
      component:Home,
      // children:[
      //   {
      //     path: '/list',
      //     // name:'List',
      //     component:List
      //   },
      //   {
      //     path: '/home',
      //     name:'Home',
      //     component:Home
      //   }
      // ]
      // component: require('@/components/content/home.vue').default
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/songList',
      component:songList,
      children:[
        {
          path: '/',
          name:'list',
          component:list
        },
        {
          path: 'list',
          name:'list',
          component:list
        }
      ]
    }
  ]
})
