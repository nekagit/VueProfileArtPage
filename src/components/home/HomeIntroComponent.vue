<script setup lang="ts">
import { ref } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

// Import the images statically
import ImageHelper from '@/services/ImageHelper'

import Intro01Component from './intro/Intro01Component.vue'
import Intro02Component from './intro/Intro02Component.vue'
import Intro03Component from './intro/Intro03Component.vue'
import Intro04Component from './intro/Intro04Component.vue'

const pauseOnHover = ref(false)
const isMobile = ref(false)

const slides = [
  {
    title: 'Spotlees aus Dortmund',
    image: ImageHelper().introGallery[0],
    component: Intro01Component
  },
  {
    title: 'Schadenfeststellung vom KFZ-Gutachter',
    image: ImageHelper().introGallery[1],
    component: Intro02Component
  },
  {
    title: 'Spotlees aus Dortmund',
    image: ImageHelper().introGallery[2],
    component: Intro03Component
  },
  {
    title: 'Spotlees aus Dortmund',
    image: ImageHelper().introGallery[3],
    component: Intro04Component
  }
]
</script>
<template>
  <div class="w-full h-screen flex items-center justify-center bg-gray-900">
    <vueper-slides
      fixed-height="80vh"
      autoplay
      :pause-on-hover="pauseOnHover"
      :arrows="!isMobile"
      lazy-load-on-drag
      :dragging-distance="70"
      :pause-on-touch="true"
      :duration="10000"
      fade
      class="w-full h-full shadow-xl"
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" class="container relative">
        <template v-slot:content>
          <div class="absolute inset-0 flex items-center justify-center">
            <component :is="slide.component" class="p-4 bg-white rounded-md shadow-lg"></component>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>
  