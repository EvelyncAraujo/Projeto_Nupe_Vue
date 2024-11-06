import { createRouter, createWebHistory } from 'vue-router'
import BlankLayout from '@/layouts/BlankLayout.vue'
// import DefaultLayout from '@/layouts/DefaultLayout.vue'
import StudentView from '../views/StudentView.vue'
import AtendimentoView from '@/views/AtendimentoView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SectorView from '@/views/SectorView.vue'
import CampusView from '@/views/CampusView.vue'
import AttendanceReasonView from '@/views/AttendanceReasonView.vue'
import HomeView from '@/views/HomeView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import CadastroLoginView from '@/views/CadastroLoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/login',
    //   component: LoginView,
    //   children: [
    //     {
    //       path: '/about',
    //       name: 'about',
    //       component: () => import('../views/AboutView.vue')
    //     }
    //   ]
    // },
    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: '/',
          name: 'login',
          component: LoginView,
        },
        {
          path: '/home',
          name: 'home',
          component: HomeView
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
        {
          path: '/forgot',
          name: 'ForgotPassword',
          component: ForgotPasswordView
        },
        {
          path: '/cadastro',
          name: 'CadastroLogin',
          component: CadastroLoginView
        }
      ]
    }
  ]
})

export default router
