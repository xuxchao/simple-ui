---
{ title: "Preview" }
---

<script lang="ts" setup>
  import { Preview } from "../src/components/Preview"

  function previewHandler() {
    Preview([
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    ])
  }
</script>

# Preview

> 能够鼠标滚轮放大缩小, 拖拽图片，单击浮层关闭

## 基本用法

<button @click="previewHandler" type="button" class="text-sm px-4 py-2 rounded bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 active:bg-blue-600 transition duration-150 ease-in-out text-white shadow-md">预览图片</button>

```html
<templte>
  <button type="button" class="text-sm px-4 py-2 rounded bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 active:bg-blue-600 transition duration-150 ease-in-out text-white shadow-md">预览图片</button>
</template>
<script lang="ts" setup>
  import { Preview } from "simple-ui";

  function previewHandler() {
    Preview([
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    ]);
  }
</script>
```

## API 设计

1. 鼠标滚轮控制图片放大缩小
2. 鼠标拖拽移动图片的位置

```typescript
Preview(urls: string[])
```

## TODO

- 添加操作(关闭，放大，旋转...)等实体按钮
- 测试用例
- 多图片转换，旋转功能
- body 禁用滚轮
