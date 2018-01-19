import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import formTodo from '@/components/formTodo'
import detailsTodo from '@/components/detailsTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/ajouter',
      name: 'addTodo',
      component: formTodo
    },
    {
      path: '/modifier/:id',
      name: 'editTodo',
      component: formTodo
    },
    {
      path: '/details/:id',
      name: 'detailsTodo',
      component: detailsTodo
    }
  ]
})
