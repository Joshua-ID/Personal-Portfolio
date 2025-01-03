import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../components/NotFound.vue'
import LandingPage from '@/components/LandingPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: LandingPage },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
