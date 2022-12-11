---
{ title: "Toast" }
---

<script setup lant="ts">
  import { Toast } from "../src/components/Toast";
  const baseClickHandler = () => {
    Toast('你好')
  }
  const htmlClickHandler = () => {
    Toast('<span class="text-blue-600">蓝色字体<span>', { dangerouslyUseHTMLString: true })
  }
</script>

# Toast

## 基本用法

<button type="button" @click="baseClickHandler" class="text-sm px-4 py-2 rounded bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 active:bg-blue-600 transition duration-150 ease-in-out text-white shadow-md">弹出来</button>

```ts
import { Toast } from "../src/components/Toast";
Toast("你好");
```

## 解析 html

内容为: `<em>你好</em>`

<button type="button" @click="htmlClickHandler" class="text-sm px-4 py-2 rounded bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 active:bg-blue-600 transition duration-150 ease-in-out text-white shadow-md">弹出来</button>

```ts
import { Toast } from "../src/components/Toast";
Toast(`<span class="text-blue-600">蓝色字体<span>`, {
  dangerouslyUseHTMLString: true,
  time: -1,
});
```

## API 设计

```typescript
Toast(message: string; otherParams?: ToastParams): ToastReturn

interface ToastParams {
  time?: number;
  appendTo?: string | HTMLElement;
  dangerouslyUseHTMLString?: boolean;
}

interface ToastReturn {
  close():void
}
```

## ToastParams 详解

| 属性                     | 说明                                      | 类型                  | 默认值        |
| ------------------------ | ----------------------------------------- | --------------------- | ------------- |
| time                     | Toast 存在的时长, 单位秒, -1 代表永不消失 | number                | 2             |
| appendTo                 | 将 Toast 放到那个 dom 下                  | string 或 HTMLElement | document.body |
| dangerouslyUseHTMLString | 是否将 message 解析为 html 片段           | boolean               | false         |

## ToastReturn 详解

| 属性  | 说明       | 类型     | 默认值 |
| ----- | ---------- | -------- | ------ |
| close | 关闭 Toast | Function | --     |
