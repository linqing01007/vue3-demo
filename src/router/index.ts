import { createRouter, createWebHistory } from 'vue-router'
import Mouse from '../components/Mouse.vue'
import TodoMVC from '../views/TodoMVC/TodoMVC.vue'
import ValidateForm from '../views/ValidateForm/Index.vue'
import Home from '../components/Home.vue'
import Tree from '../views/Tree/Tree.vue'

const routes = [
  {
    path: '/',
    redirect: '/mouse',
    component: Home
  },
  {
    path: '/mouse',
    name: 'mouse',
    component: Mouse
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: TodoMVC
  },
  {
    path: '/validateForm',
    name: 'validateForm',
    component: ValidateForm
  },
  {
    path: '/tree',
    name: 'tree',
    component: Tree
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
