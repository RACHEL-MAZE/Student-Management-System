import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: () => import('../views/StudentsView.vue'),
      
      // component: Home,
    },
    {
      path: '/grades',
      name: 'grades',
      component: () => import('../views/GradesView.vue'),
    },
  ],
})

export default router
