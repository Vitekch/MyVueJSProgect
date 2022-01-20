import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TaskList from '../components/Tasks/TaskList.vue';


Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
      path: '/',
      component: TaskList,
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
