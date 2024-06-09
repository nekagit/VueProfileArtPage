<template>
  <div class="gallery">
    <div class="container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="img"
        :class="`box-${index + 1}`"
        :data-text="'#' + (index + 1)"
        :style="`--image: url(${image.src})`"
        @click="openModal(index)"
      ></div>
      <div
        v-if="selectedImage !== null"
        :id="'myModal' + uniqueId"
        class="modal"
        @click="closeModal"
      >
        <div class="modal-content-wrapper" @click.stop>
          <button class="close" @click="closeModal">&times;</button>
          <img :id="'myImg'" :src="images[selectedImage].src" class="modal-image" />
          <div class="modal-title">#{{ selectedImage + 1 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  images: { src: string; title: string }[]
}>()

const uniqueId = ref(Math.random().toString(36).substr(2, 9))
const modal = ref<HTMLElement | null>(null)
const selectedImage = ref<number | null>(null)

const openModal = (index: number) => {
  selectedImage.value = index
  if (modal.value) {
    modal.value.style.display = 'flex'
  }
}

const closeModal = () => {
  selectedImage.value = null
  if (modal.value) {
    modal.value.style.display = 'none'
  }
}

onMounted(() => {
  modal.value = document.getElementById('myModal' + uniqueId.value)
})
</script>

<style scoped>
html, body {
  height: 100%;
  width: 100%;
  overflow: hidden; /* Prevent body scroll */
  background-color: #f5f5f5; /* Light background color for the whole page */
}

.gallery {
  background-color: #ffd700; /* Brighter gallery background color */
  width: 100%;
  height: 100%;
  overflow: auto; /* Allow scroll within gallery */
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1rem;
  width: 90%;
  max-width: 1450px;
  margin: 0 auto;
  padding: 2rem 0;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adding shadow for 3D effect */
  border-radius: 10px; /* Rounded corners for a smoother look */
}

.img:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Enhanced shadow on hover */
  transform: translateY(-5px); /* Slight lift effect on hover */
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

.modal {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
}

.modal-content-wrapper {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: cover;
  animation-name: zoom;
  animation-duration: 0.6s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for modal image */
  border-radius: 10px; /* Rounded corners for modal image */
}

@keyframes zoom {
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #ff0000;
  font-size: 40px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 9999;
  transition: color 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
}

.modal-title {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Style for smaller screens */
@media only screen and (max-width: 700px) {
  .modal-content-wrapper {
    max-width: 100%;
    max-height: 100%;
    padding: 0 1rem;
  }

  .close {
    top: 10px;
    right: 20px;
    font-size: 30px;
  }
}
</style>
