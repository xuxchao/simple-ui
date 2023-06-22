<template>
  <div
    class="toggle"
    :class="{ 'bg-blue-500': isActive, 'bg-gray-200': !isActive }"
    @click="toggle"
  >
    <div
      class="toggle-button"
      :class="{ 'translate-x-full': isActive, 'bg-white': isActive }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped>
.toggle {
  display: flex;
  align-items: center;
  width: 2.5rem;
  height: 1.5rem;
  cursor: pointer;
  border-radius: 1.5rem;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  transition-property: background-color;
}

.toggle-button {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  box-shadow: 0px 2px 5px #999;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  transition-property: transform, background-color;
}
</style>
