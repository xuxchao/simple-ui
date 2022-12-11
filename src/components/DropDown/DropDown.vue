<template>
  <div class="inline-block relative p-3 group">
    <button
      type="button"
      class="peer text-sm px-4 py-2 rounded bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 active:bg-blue-600 transition duration-150 ease-in-out text-white shadow-md"
    >
      主要颜色
    </button>
    <ul
      class="cursor-pointer hidden absolute peer-focus:block bg-white shadow-lg px-4 py-1 mt-2 min-w-[100px]"
    >
      <li
        class="py-1 px-2 text-sm hover:bg-gray-600 hover:text-white text-black rounded"
      >
        苹果
      </li>
      <li
        class="py-1 px-2 text-sm hover:bg-gray-600 hover:text-white text-black rounded"
      >
        香蕉
      </li>
      <li
        class="py-1 px-2 text-sm hover:bg-gray-600 hover:text-white text-black rounded"
      >
        西瓜
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup></script>
