<template>
  <div>
    <AInternetLoadingScreen class="loading" v-if="isLoading" />
    <router-view v-if="!isLoading" class="router" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AInternetLoadingScreen from '@/components/atoms/sections/internet/AInternetLoadingScreen.vue';
import router from '@/router/index.ts';

const isLoading = ref(false);

router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>

<style scoped>
.loading,
.router {
  opacity: 0.5; /* Start with opacity 0 */
  animation: fadeInOut 3s ease; /* Smooth fade-in and fade-out animation */
}

@keyframes fadeInOut {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.loading {
  animation-delay: 1s; /* Delay the animation for the loading component */
}
</style>
