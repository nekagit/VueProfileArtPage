<template>
  <h1 class="text-center">Welcome to StankovicArt</h1>
  <div class="stage" v-bind="$attrs">
    <div class="container">
      <div class="ring">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="img"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </div>
    </div>
  </div>
  <AMenuButton />
</template>

<script setup lang="ts">
import Autmn1 from '@/assets/Nana/autmnGallery/11.jpg'
import abstract1 from '@/assets/Nana/abstractGallery/1.jpg'
import Intro2 from '@/assets/Nana/introGallery/2.jpg'
import Intro3 from '@/assets/Nana/introGallery/3.JPG'
import Intro4 from '@/assets/Nana/introGallery/4.jpg'
import other13 from '@/assets/Nana/otherGallery/13.jpg'
import other5 from '@/assets/Nana/otherGallery/5.jpg'
import other6 from '@/assets/Nana/otherGallery/6.jpg'
import other7 from '@/assets/Nana/otherGallery/7.jpg'
import other8 from '@/assets/Nana/otherGallery/8.jpg'
import { gsap } from 'gsap'
import { nextTick, onMounted, ref } from 'vue'
import AMenuButton from '../../nav/AMenuButton.vue'

const images = ref([])

const introGallery = [
  Autmn1,
  other8,
  Intro2,
  Intro3,
  other5,
  Intro4,
  abstract1,
  other6,
  other7,
  other13
]

onMounted(async () => {
  images.value = introGallery
  await nextTick() // Wait for the DOM to be fully updated
  setupCarousel()
})

function setupCarousel() {
  let xPos = 0

  gsap
    .timeline()
    .set('.ring', { rotationY: 180, cursor: 'grab' })
    .set('.img', {
      rotateY: (i) => i * -36,
      transformOrigin: '50% 50% 700px',
      z: -500,
      backgroundPosition: (i) => getBgPos(i),
      backfaceVisibility: 'hidden'
    })
    .from('.img', {
      duration: 1.5,
      y: 200,
      opacity: 0,
      stagger: 0.1,
      ease: 'expo'
    })
    .add(() => {
      const imgs = document.querySelectorAll('.img')
      imgs.forEach((img) => {
        img.addEventListener('mouseenter', (e) => {
          const current = e.currentTarget
          gsap.to('.img', { opacity: (i, t) => (t === current ? 1 : 0.5), ease: 'power3' })
        })

        img.addEventListener('mouseleave', () => {
          gsap.to('.img', { opacity: 1, ease: 'power2.inOut' })
        })
      })
    }, '-=0.5')

  window.addEventListener('mousedown', dragStart)
  window.addEventListener('touchstart', dragStart)
  window.addEventListener('mouseup', dragEnd)
  window.addEventListener('touchend', dragEnd)

  function dragStart(e) {
    if (e.touches) e.clientX = e.touches[0].clientX
    xPos = Math.round(e.clientX)
    gsap.set('.ring', { cursor: 'grabbing' })
    window.addEventListener('mousemove', drag)
    window.addEventListener('touchmove', drag)
  }

  function drag(e) {
    if (e.touches) e.clientX = e.touches[0].clientX

    gsap.to('.ring', {
      rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
      onUpdate: () => {
        gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) })
      }
    })

    xPos = Math.round(e.clientX)
  }

  function dragEnd() {
    window.removeEventListener('mousemove', drag)
    window.removeEventListener('touchmove', drag)
    gsap.set('.ring', { cursor: 'grab' })
  }

  function getBgPos(i) {
    const rotationY = gsap.getProperty('.ring', 'rotationY')
    const adjustedRotation = gsap.utils.wrap(0, 360, rotationY - 180 - i * 36)
    const bgPosX = (adjustedRotation / 360) * 100 - 30 // Calculate X position
    return `${bgPosX}% 0px` // Return the background position
  }
}
</script>

<style lang="scss" scoped>
.stage,
.ring,
.img {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* Add transform-style property */
  user-select: none;
  border: none;
  outline: none;
}
.stage {
  overflow: hidden;
  background: #000;
}

div,
svg {
  position: absolute;
}

.container {
  perspective: 2000px; /* Increase the perspective value */
  width: 400px;
  height: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center; /* Update backgroundPosition property */
  border: none;
  outline: none;
}

.stage,
.container,
.ring,
.img,
.stage *:focus,
.container *:focus,
.ring *:focus,
.img *:focus {
  outline: none;
  box-shadow: none;
}
</style>
