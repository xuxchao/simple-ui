<template>
  <!-- <PreviewImage
    :urls="[
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    ]"
  ></PreviewImage> -->
  <button @click="previewHandler">打开预览图片</button>
</template>
<script lang="ts" setup>
// import PreviewImage from "./components/Preview/PreviewImage.vue";
import { Preview } from "./components/Preview";

function previewHandler() {
  Preview([
    "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  ]);
}
</script>
