import Vue from 'vue';
import VueRouter from 'vue-router';
import { Routes } from '@/consts/routes';
import HomePage from '@/pages/HomePage.vue';
import TodoPage from '@/pages/TodoPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: Routes.HOME,
    component: HomePage,
  },
  {
    path: Routes.TODO,
    name: 'todo',
    component: TodoPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
