import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from './components/TheWelcome.vue';
import Login from './components/Login.vue';
import Signup from './components/signup.vue';
import Dashboard from './components/dashboard.vue';



Vue.use(Router);

routes: [
  { path: '/',  component: TheWelcome },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Cette route nécessite une authentification
  },
],
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Vérifie l'existence du token dans localStorage

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' }); // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
  } else {
    next(); // Permet l'accès à la route
  }
});
export default router;
