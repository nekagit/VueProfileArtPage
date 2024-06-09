<template>
  <div class="container">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="img"
      :class="`box-${index + 1}`"
      :data-text="image.title"
      :style="`--image: url(${image.src})`"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  images: { src: string; title: string }[];
}>();
</script>

<style scoped>

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1rem;
  width: 90%;
  max-width: 1450px;
  transition: all 400ms;
}

.img {
  background: var(--image) center center no-repeat;
  background-size: contain;
  width: 100%;
  padding-top: 60.83%; /* Aspect ratio 1450 / 882 */
  transition: all 400ms;
  cursor: pointer;
  position: relative;
}

.container:hover .img {
  filter: grayscale(100%) opacity(24%);
  transition: all 400ms;
}

.container .img:hover {
  filter: grayscale(0%) opacity(100%);
  transition: all 400ms;
}

.img::after {
  content: attr(data-text);
  position: absolute;
  background-color: #000;
  color: #fff;
  padding: 5px 8px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  left: 50%;
  transform: translateX(-50%);
  bottom: -50px;
  opacity: 0;
  transition: all 600ms;
}

.img:hover::after {
  bottom: 20px;
  opacity: 1;
}
</style>
