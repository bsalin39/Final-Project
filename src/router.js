import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import FishiesPage from '@/views/FishiesPage.vue'
import BugsPage from '@/views/BugsPage.vue'
import ArtPage from '@/views/ArtPage.vue'
import FishDetails from '@/views/FishDetails.vue'
import ArtDetails from '@/views/ArtDetails.vue'
import BugsDetails from '@/views/BugsDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/fish', name: 'Fish', component: FishiesPage },
  { path: '/fish/:id', name: 'Fish Details', component: FishDetails },
  { path: '/bugs', name: 'Critters', component: BugsPage },
  { path: '/bugs/:id', name: 'Bugs Details', component: BugsDetails },
  { path: '/art', name: 'Art', component: ArtPage },
  { path: '/art/:id', name: 'Art Details', component: ArtDetails },
  // { path: '/other', name: 'Fish', component: (Fish) => import('@/views/FishiesPage.vue') },
  //{ path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  //{ path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
