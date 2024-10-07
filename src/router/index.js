import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import StudentView from '../views/StudentView.vue'
import InstituicaoView from '@/views/InstituicaoView.vue'
import AtendimentoView from '@/views/AtendimentoView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SectorView from '@/views/SectorView.vue'
import CampusView from '@/views/CampusView.vue'
import AttendanceReasonView from '@/views/AttendanceReasonView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
      
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        
      ]

    },
    {
      path: '/',
      component: BlankLayout,
      children: [

        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/login',
          name: 'login',
          component: LoginView

        },
        {
          path: '/sector',
          name: 'sector',
          component: SectorView
       
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

      {
        path: '/campus',
        name: 'campus',
        component: CampusView
      },
          {
            path: '/razoes',
            name: 'RazoesAtendimento',
            component: AttendanceReasonView
          },
      
      ]
    }
    
   
  ]
})

export default router
