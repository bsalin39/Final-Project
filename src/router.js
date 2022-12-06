import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

import HomePage from '@/views/HomePage.vue'
import FishiesPage from '@/views/FishiesPage.vue'
import BugsPage from '@/views/BugsPage.vue'
import ArtPage from '@/views/ArtPage.vue'
import FishDetails from '@/views/FishDetails.vue'
import ArtDetails from '@/views/ArtDetails.vue'
import BugsDetails from '@/views/BugsDetails.vue'
import LoginPage from '@/components/LoginPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/fish', name: 'Fish', component: FishiesPage },
  { path: '/fish/:id', name: 'Fish Details', component: FishDetails },
  { path: '/bugs', name: 'Critters', component: BugsPage },
  { path: '/bugs/:id', name: 'Bugs Details', component: BugsDetails },
  { path: '/art', name: 'Art', component: ArtPage },
  { path: '/art/:id', name: 'Art Details', component: ArtDetails },
  { path: '/login', name: 'Login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
