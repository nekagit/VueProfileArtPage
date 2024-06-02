<script setup lang="ts">
import FirmDetails from '@/components/atoms/cards/ABaseAnimationCard.vue';
import AInternetContactCard from '@/components/atoms/cards/AInternetContactCard.vue';
import ABaseFooterSection from '@/components/atoms/sections/ABaseFooterSection.vue';
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import {  onMounted } from 'vue'
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<template>
    <div class="flex flex-col gap-4 md:gap-8 md:mt-8">
      <AInternetContactCard
        :title="'Let Talk'"
        subtitle="Wanna get in contact with us? No problem, just fill out the form or directly message through email or social media."
        email="nenad99@hotmail.de"
      />
      <FirmDetails title="Dragoslava Stankovic" :content="'Dragoslava Stanković – Dragica, born on April 23, 1950, in Glušci, Mačva, is a renowned Serbian painter. She lived and worked in Germany from 1971, where she developed her artistic skills and held her first solo exhibitions in Bad Oeynhausen in 1992. Dragoslava has exhibited extensively in Serbia and internationally, including Paris, New York, and Miami, and has been recognized with numerous awards. Currently, she resides and works in Šabac, Serbia, Gospodar Jevremovoj br. 47 Number +381-62/224631'" />
    </div>
      <ABaseHorizontalSection class="charmFont" :content="'SOP -  Contact'" />
      <ABaseFooterSection />

</template>
