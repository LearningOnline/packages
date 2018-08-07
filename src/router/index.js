import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Note from '@/components/Note.vue'
Vue.use(Router)

// 生成路由数组
var routeArray = [
  {
    path: '/',
    name: '我的首页',
    component: HelloWorld
  },
  {
    path: '/note',
    name: '我的笔记',
    component: Note
  }
]

// 生成路由实例
var routerObj = new Router({
  mode: 'history',
  routes: routeArray
})

export default routerObj
