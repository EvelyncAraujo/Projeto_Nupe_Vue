import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/sector',
          name: 'sector',
          component: () => import('../views/Sector.vue')
        }
      ]

    },
    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/Login.vue')
        },
      ]
    }
    
   
  ]
})

export default router
