import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
  {
      path: '/register',
      name: 'register',
      component: () => import('../components/Register.vue'),
    },

    {

      path:'/login',
      name: 'login',
      component: () => import('../components/Login.vue'),

    },

    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentsView.vue'),
    },

      {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/grades',
      name: 'grades',
      component: () => import('../views/GradesView.vue'),
    }
  ],
})

export default router
