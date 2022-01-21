import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TaskList from '../components/Tasks/TaskList.vue';
import Chat from '../components/Chat/Chat.vue';


Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
      path: '/todo',
      component: TaskList,
    },
    {
      path: '/chat',
      component: Chat,
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
