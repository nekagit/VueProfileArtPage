<template>
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
import ImageHelper from '@/services/ImageHelper'
import AMenuButton from '../../nav/AMenuButton.vue'
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import Intro1 from '@/assets/Nana/introGallery/1.JPG'
import Intro2 from '@/assets/Nana/introGallery/2.jpg'
import Intro3 from '@/assets/Nana/introGallery/3.JPG'
import Intro4 from '@/assets/Nana/introGallery/4.jpg'

import spring2 from '@/assets/Nana/springGallery/2.JPG'

import summer1 from '@/assets/Nana/summerGallery/1.jpg'

import winter1 from '@/assets/Nana/winterGallery/1.JPG'

import abstract1 from '@/assets/Nana/abstractGallery/1.jpg'
import abstract2 from '@/assets/Nana/abstractGallery/2.jpg'

const images = ref([])

const introGallery = [
  Intro1,
  Intro2,
  Intro3,
  Intro4,
  abstract1,
  spring2,
  summer1,
  winter1,
  abstract2
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
      transformOrigin: '50% 50% 500px',
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
    return (
      100 -
      (gsap.utils.wrap(0, 360, gsap.getProperty('.ring', 'rotationY') - 180 - i * 36) / 360) * 500 +
      'px 0px'
    )
  }
}
</script>

<style lang="scss" scoped>
html,
body,
.stage,
.ring,
.img {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  user-select: none;
  border: none;
  outline: none;
}

html,
body,
.stage {
  overflow: hidden;
  background: #000;
}

div,
svg {
  position: absolute;
}

.container {
  perspective: 2000px;
  width: 300px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.img {
  background-size: cover;
  background-position: center;
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
