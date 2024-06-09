<template>
  <AInternetFullGallery :images="ImageHelper().sellingGallery" />
  <AMenuButton />
</template>

<script setup lang="ts">
import AInternetFullGallery from "@/components/atoms/img/AInternetFullGallery.vue";
import ImageHelper from "@/services/ImageHelper.ts";
import AMenuButton from "@/components/atoms/nav/AMenuButton.vue";
</script>
