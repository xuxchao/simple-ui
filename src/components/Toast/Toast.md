# API 设计

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

# 例子
