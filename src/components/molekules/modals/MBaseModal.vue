<template>
  <div class="h-screen w-full" @click="openModal" />
  <div :id="'myModal' + uniqueId" class="modal" @click="closeModal">
    <div class="modal-content-wrapper" @click.stop>
      <button class="close" @click="closeModal">&times;</button>
      <img :id="'myImg'" alt="asdf" :src="imgSrc" class="h-screen" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  imgSrc: string
}>()

const uniqueId = ref(Math.random().toString(36).substr(2, 9))
const modal = ref<HTMLElement | null>(null)

const openModal = () => {
  if (modal.value) {
    modal.value.style.display = 'flex'
  }
}

const closeModal = () => {
  if (modal.value) {
    modal.value.style.display = 'none'
  }
}

onMounted(() => {
  modal.value = document.getElementById('myModal' + uniqueId.value)
})
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content-wrapper {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  margin: auto;
  display: block;
  padding: 1rem;
  width: 75%;
  animation-name: zoom;
  animation-duration: 0.6s;
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

/* Style for smaller screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
