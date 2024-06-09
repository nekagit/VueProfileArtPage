<template>
  <AInternetFullGallery :images="ImageHelper().sellingGallery" />
</template>

<script setup lang="ts">
import AInternetFullGallery from "@/components/atoms/img/AInternetFullGallery.vue";
import ImageHelper from "@/services/ImageHelper.ts";
</script>
