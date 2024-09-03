import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from './components/TheWelcome.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';

const routes = [
  { path: '/', component: TheWelcome },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
