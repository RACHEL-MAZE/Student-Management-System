import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/StudentsView.vue'),
      // name: 'home',
      // component: Home,
    },
    // {
    //   path: '/students',
    //   name: 'students',
    //   component: () => import('../views/StudentsView.vue'),
    // },
  ],
})

export default router
