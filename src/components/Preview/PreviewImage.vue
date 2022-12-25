<template>
  <div class="fixed">
    <div class="fixed top-0 left-0 right-0 bottom-0 bg-black/30"></div>
    <div
      class="fixed w-full h-full flex justify-center items-center"
      @click.self="closeHandler"
    >
      <img
        v-for="(item, index) in props.urls"
        v-show="props.initialIndex === index"
        :key="index + item"
        :src="item"
        :style="{
          ...style,
        }"
        @mousedown="mousedownHandler"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onUnmounted, reactive, type StyleValue } from "vue";
import { previewImageProps } from "./type";
import { useEventListener } from "@vueuse/core";
import { isFirefox } from "../../utils";
const props = defineProps(previewImageProps);
const emit = defineEmits<(e: "close") => void>();

useEventListener(
  document,
  isFirefox() ? "DOMMouseScroll" : "mousewheel",
  (e: WheelEvent) => {
    console.log("xxx");
    const { scale } = transform;
    const delta = -e.deltaY;
    if (delta > 0) {
      transform.scale = scale * 1.2;
    } else {
      transform.scale = scale * 0.8;
    }
  }
);
const transform = reactive({
  x: 0,
  y: 0,
  scale: 1,
  mousedown: false,
  ix: 0,
  iy: 0,
});

const style = computed(() => {
  let style: StyleValue = {
    transform: `scale(${transform.scale}) rotate(0deg) translate(${transform.x}px, ${transform.y}px)`,
    userSelect: "none",
    position: "static",
  };
  return style;
});

function mousedownHandler(p: MouseEvent) {
  const { x, y } = transform;
  const startX = p.pageX;
  const startY = p.pageY;

  const dragHandler = (ev: MouseEvent) => {
    transform.x = x + ev.pageX - startX;
    transform.y = y + ev.pageY - startY;
  };
  const removeMousemove = useEventListener(document, "mousemove", dragHandler);
  const removeMoseup = useEventListener(document, "mouseup", () => {
    removeMousemove();
    removeMoseup();
  });
  transform.mousedown = true;
  transform.ix = p.clientX;
  transform.iy = p.clientY;
  p.preventDefault();
}

function closeHandler() {
  console.log("close");
  emit("close");
}
</script>
