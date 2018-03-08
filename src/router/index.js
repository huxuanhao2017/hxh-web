import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/index'
import iView from 'iview'

Vue.use(Router)
Vue.use(iView)
export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/login'},
    {
      path: '/heller',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Index',
      component: Index
    },
    {
      path: '/base',
      meta: {
        title: 'base',
        requiresAuth: true
      },
      component: (resolve) => require(['../views/base/base'], resolve),
      children: [
        {
          path: 'welcome',
          name: 'welcome',
          component: (resolve) => require(['../views/sys/welcome'], resolve),
          meta: {
            title: 'welcome'
          }
        },
        {
          path: 'user',
          name: 'user',
          component: (resolve) => require(['../views/sys/user.vue'], resolve),
          meta: {
            title: 'user'
          }
        },
        {
          path: 'menu',
          name: 'menu',
          component: (resolve) => require(['../views/sys/menu.vue'], resolve),
          meta: {
            title: 'menu'
          }
        },
        {
          path: 'role',
          name: 'role',
          component: (resolve) => require(['../views/sys/role.vue'], resolve),
          meta: {
            title: 'role'
          }
        },
        {
          path: 'test4',
          name: 'test4',
          // component: (resolve) => require(['./views/test/test4.vue'], resolve),
          meta: {
            title: 'test4'
          }
        },
        {
          path: 'test5',
          name: 'test5',
          // component: (resolve) => require(['./views/test/test5.vue'], resolve),
          meta: {
            title: 'test5'
          }
        },
        {
          path: 'test6',
          name: 'test6',
          // component: (resolve) => require(['./views/test/test6.vue'], resolve),
          meta: {
            title: 'test6'
          }
        }
      ]
    }
  ]
})
