import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
=======

>>>>>>> e2b1eb1e0e179ad986bf5b85953c409368688061

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
<<<<<<< HEAD
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
=======

>>>>>>> e2b1eb1e0e179ad986bf5b85953c409368688061
  ],
})

export default router
