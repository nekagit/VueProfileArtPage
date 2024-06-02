import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/SOP/HomeView.vue'
import SchoolView from '@/views/SOP/SchoolView.vue'
import GalleryView from '@/views/SOP/GalleryView.vue'
import SportView from '@/views/SOP/SportView.vue'
import ContactView from '@/views/SOP/ContactView.vue'
import ANBIView from '@/views/SOP/ANBIView.vue'
  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sport',
      name: 'sport',
      component: SportView
    },
    {
      path: '/school',
      name: 'school',
      component: SchoolView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/anbi',
      name: 'anbi',
      component: ANBIView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: SportView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
