<template>
    <div class="horizontalBody text-white">
        <div class="separator">
            <div class="line"></div>
            <h2 >{{ props.content }}</h2>
            <div class="line"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['content'])
</script>

<style scoped>
.horizontalBody{
  max-width: 1100px;
  margin: 2rem auto;
}
.separator{
  display:flex;
  align-items: center;
}

.separator .line{
  height: 3px;
  flex: 1;
  background-color: #ffffff;
}

.separator h2{
  padding: 0 2rem;
}
</style>
