import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PasswordStrength from '../views/PasswordStrength.vue';
import PasswordGenerator from '../views/PasswordGenerator.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/strength-check',  component: PasswordStrength },
  { path: '/about',  component: AboutView },
  { path: '/generate-password', component: PasswordGenerator },
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
