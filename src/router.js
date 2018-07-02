import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/screens/Home')
    },
    {
      path: '/doacoes',
      name: 'Donations',
      component: () => import('@/screens/Donations')
    },
    {
      path: '/cursos',
      name: 'Courses',
      component: () => import('@/screens/Courses')
    }
  ]
});

export default router;
