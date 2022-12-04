<template>
  <div
    class="fixed px-3 py-1 -translate-x-1/2 -translate-y-1/2 rounded bg-black/10 top-1/2 left-1/2"
  >
    <span v-if="props.dangerouslyUseHTMLString" v-html="props.message"></span>
    <span v-else>{{ props.message }}</span>
  </div>
</template>
<script lang="ts" setup>
import { toastMessageProps } from "./type";
const props = defineProps(toastMessageProps);
</script>
<!-- <style lang="scss"></style> -->
