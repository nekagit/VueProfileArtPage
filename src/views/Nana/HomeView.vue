<script setup lang="ts">
import ABaseFooterSection from '@/components/atoms/sections/ABaseFooterSection.vue';
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import ABaseParallaxSection from '@/components/atoms/sections/ABaseParallaxSection.vue';
import HomeIntroComponent from '@/components/home/HomeIntroComponent.vue';
import AInternetParralaxImgCarousel from '@/components/atoms/cards/internet/AInternetParralaxImgCarousel.vue';
import {  onMounted } from 'vue'
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<template>
  <AInternetParralaxImgCarousel />
    <ABaseHorizontalSection class="charmFont" :content="'SOP -  Home'" />
  <ABaseFooterSection />

</template>
