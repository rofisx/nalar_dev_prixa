import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DaftarView from '../views/DaftarView.vue'
import AskMethod from '../views/AskMethodView.vue'
import Consent from '../views/consent/Consent.vue'
import ConsentRejectConfirmation from '../views/consent/ConsentRejectConfirmation.vue'
import ConsentReject from '../views/consent/ConsentReject.vue'
import Conversation from '../views/conversation/Conversation.vue'
import Screening from '../views/konsultasi/ScreeningView.vue'
import TemuDokter from '../views/konsultasi/TemuDokterView.vue'
import Farmasi from '../views/farmasi/FarmasiView.vue'
import PusatBantuan from '../views/pusatbantuan/PusatBantuanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/daftar',
      name: 'daftar',
      component: DaftarView
    },
    {
      path: '/ask_method',
      name: 'ask_method',
      component: AskMethod
    },
    {
      path: '/consent',
      name: 'consent',
      component: Consent
    },
    {
      path: '/consent_reject',
      name: 'consent_reject',
      component: ConsentReject
    },
    {
      path: '/consent_reject_confirmation',
      name: 'consent_reject_confirmation',
      component: ConsentRejectConfirmation
    },
    {
      path: '/conversation',
      name: 'conversation',
      component: Conversation
    },
    {
      path: '/screening',
      name: 'screening',
      component: Screening
    },
    {
      path: '/temudokter',
      name: 'temudokter',
      component: TemuDokter
    },
    {
      path: '/prescription-not-found',
      name: 'farmasi',
      component: Farmasi
    },
    {
      path: '/pusat_bantuan',
      name: 'pusat_bantuan',
      component: PusatBantuan
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
