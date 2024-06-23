<template>
  <div>
    <div class="tab-bar">
      <button :class="{ 'active': currentTab === 'selling' }" @click="currentTab = 'selling'">
        Selling
      </button>
      <button :class="{ 'active': currentTab === 'zivot' }" @click="currentTab = 'zivot'">
        Život
      </button>
    </div>

    <div v-if="currentTab === 'selling'">
      <AInternetFullGallery :images="ImageHelper().sellingGallery" />
    </div>
    <div v-else-if="currentTab === 'zivot'">
      <AInternetFullGallery :images="ImageHelper().zivotGallery" />
    </div>

    <AMenuButton />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AInternetFullGallery from "@/components/atoms/img/AInternetFullGallery.vue";
import ImageHelper from "@/services/ImageHelper.ts";
import AMenuButton from "@/components/atoms/nav/AMenuButton.vue";

// Define reactive data
const currentTab = ref('selling'); // Default to 'selling' tab
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tab-bar button {
  background-color: #f0f0f0;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tab-bar button.active {
  background-color: #007bff;
  color: white;
}

.tab-bar button:hover {
  background-color: #ddd;
}
</style>
