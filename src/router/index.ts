import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Nana/HomeView.vue'
import SchoolView from '@/views/Nana/SchoolView.vue'
import GalleryView from '@/views/Nana/GalleryView.vue'
import ArtView from '@/views/Nana/ArtView.vue'
import ContactView from '@/views/Nana/ContactView.vue'
import BiographyView from '@/views/Nana/BiographyView.vue'
  
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
      component: ArtView
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
      path: '/bio',
      name: 'bio',
      component: BiographyView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
