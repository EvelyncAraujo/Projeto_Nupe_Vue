import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import StudentView from '../views/StudentView.vue'
import InstituicaoView from '@/views/InstituicaoView.vue'
import AtendimentoView from '@/views/AtendimentoView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'


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
          component: LoginView

        },

      {
        path: '/student',
        name: 'student',
        component: StudentView
      },
      {
        path: '/instituicao',
        name: 'instituicao',
        component: InstituicaoView
      },
      {
        path: '/atendimento',
        name: 'atendimento',
        component: AtendimentoView
      },
      {
        path: '/perfil',
        name: 'perfil',
        component: ProfileView
      },
     
      ]
    }
    
   
  ]
})

export default router
