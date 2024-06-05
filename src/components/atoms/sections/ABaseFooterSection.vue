<template>
  <div class="container">
    <div class="flex justify-around flex-col md:flex-row">
      <img
        class="background-image2 hidden xl:flex rounded-xl"
        :src="ImageHelper().introGallery[4].src"
        alt="sponsors"
      />
      <img class="background-image rounded-xl" :src="logo" alt="logo" />
    </div>
    <footer class="text-white font-medium relative p-3">
      <AMenuButton class="h-[30vh]" />
      <div
        class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center text-center"
      >
        <div class="">
          <h3 class="text-lg header mb-4">Contact</h3>
          <ul>
            <li>
              <a href="mailto:nenad99@hotmail.de" class="text-white opacity-60"
                >nenad99@hotmail.de</a
              >
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="text-lg header mb-4">Refrences</h3>
          <div class="text-sm">
            <a
              href="https://serbianaart.rs/umetnik/stankovic-dragoslava-dragica"
              class="text-blueGray-500 hover:text-gray-800"
              target="_blank"
            >
              SerbianaArt</a
            >
            <br />
            <a href="https://docuverse.netlify.app" class="text-blueGray-500 hover:text-gray-800"
              >DocuVerse</a
            >.
          </div>
        </div>
        <div>
          <div>
            <button class="text-blue-400 mx-auto h-10 w-10" type="button">
              <Facebook /></button
            ><button class="text-green-600 h-10 w-10" type="button">
              <Instagram /></button
            ><button class="text-pink-400 h-10 w-10" type="button">
              <Github />
            </button>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <p class="text-white opacity-60">&copy; 2024 Nenad Kalicanin.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AMenuButton from '@/components/atoms/nav/AMenuButton.vue'
import { Facebook } from 'lucide-vue-next'
import { Instagram } from 'lucide-vue-next'
import { Github } from 'lucide-vue-next'
import logo from '@/assets/Nana/introGallery/logo.png'
import ImageHelper from '@/services/ImageHelper'
</script>

<style scoped>
.background-image {
  max-width: 70vw;
  height: auto;
  margin: auto;
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity 0.5s ease; /* Smooth transition for opacity */
}

.background-image:hover {
  opacity: 1;
}

.background-image2 {
  max-width: 42vw;
  height: 21vh;
  margin: auto;
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  transition: scale 0.5s ease; /* Smooth transition for opacity */
}

.background-image2:hover {
  scale: 150%;
}

button {
  opacity: 0.4;
  transition: opacity 0.3s;
}

button:hover {
  opacity: 150%;
}
</style>
