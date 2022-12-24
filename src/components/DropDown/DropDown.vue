<template>
  <div ref="dropDownRef" class="inline-block relative p-3 group">
    <button
      ref="buttonRef"
      type="button"
      class="peer text-sm px-4 py-2 rounded bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 active:bg-blue-600 transition duration-150 ease-in-out text-white shadow-md"
      @click="buttonClickHandler"
    >
      主要颜色
    </button>
    <Teleport :to="teleportDom">
      <ul
        ref="ulRef"
        :style="{
          display: isShowPopper ? 'block' : 'none',
        }"
        class="cursor-pointer absolute bg-white shadow-lg px-4 py-1 min-w-[100px]"
      >
        <li
          class="py-1 px-2 text-sm hover:bg-gray-600 hover:text-white text-black rounded"
          @click="itemClickHandler"
        >
          苹果
        </li>
      </ul>
    </Teleport>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { dropDownProps } from "./type";
import { createPopper } from "@popperjs/core";
import { useMouseInElement, useDebounce, onClickOutside } from "@vueuse/core";
const props = defineProps(dropDownProps);
const dropDownRef = ref<HTMLDivElement>();
const buttonRef = ref<HTMLButtonElement>();
const ulRef = ref<HTMLUListElement>();
const { isOutside: mouseButtonOutside } = useMouseInElement(buttonRef);
const { isOutside: mouseUIOutside } = useMouseInElement(ulRef);
const mouseButtonOutsideDe = useDebounce(mouseButtonOutside, 250);
const mouseUIOutsideDe = useDebounce(mouseUIOutside, 250);

const hideOnClickItem = ref(false);
const showOnClickButton = ref(false);
const teleportDom = computed(() => {
  return props.trigger ? document.body : dropDownRef.value;
});
const isShowPopper = computed(() => {
  if (props.trigger === "hover") {
    if (mouseButtonOutsideDe.value && mouseUIOutsideDe.value) {
      return false;
    } else {
      return !hideOnClickItem.value;
    }
  } else {
    if (showOnClickButton.value) {
      return !hideOnClickItem.value;
    } else {
      return false;
    }
  }
});

watch(mouseUIOutsideDe, (val) => {
  if (val) {
    hideOnClickItem.value = false;
  }
});

onClickOutside(
  buttonRef,
  () => {
    showOnClickButton.value = false;
  },
  { ignore: [ulRef] }
);

const itemClickHandler = () => {
  if (props.hideOnClick) hideOnClickItem.value = true;
};

const buttonClickHandler = () => {
  showOnClickButton.value = true;
  hideOnClickItem.value = false;
};

onMounted(() => {
  createPopper(buttonRef.value!, ulRef.value!, {
    placement: props.placement,
    // modifiers: [{ enabled: true }],
  });
});
</script>
