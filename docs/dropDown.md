---
{ title: "DropDown" }
---

<script lang="ts" setup>
  import DropDownCss from "../src/components/DropDown/DropDownCss.vue"
</script>

# DropDown

这个有俩种实现方式，一种是基于纯 css 来实现，一种是基于 js 操作。下面单独说说这俩种存在的问题

## 纯 CSS 实现

1. 存在布局遮挡问题
2. 滚动条展示不全问题
3. 屏幕适配问题

当然优点是可以快速实现，比较多的俩种方案是父级 hover 让子集展示，存在问题是子集单击之后不会消失。另外一种是利用兄弟元素，前面的是按钮等这种有焦点的元素，当触发焦点的时候展示子集，子集单击的时候也会自动关闭。

下面是一种利用兄弟元素的焦点事件出发的 DropDown
<DropDownCss />

## 结合 JS 实现

要自己写一个通过一个 Dom 定位另外一个 Dom 位置，并且处理好多级 scroll 滚动，浏览器缩放，不同浏览器的兼容问题的库还是比较耗费时间的。这里提供一个开源库 [popper.js](https://popper.js.org/docs/v2/tutorial/)。出名的框架 element-ui 就是基于这个库实现的

## API 设计

| 属性          | 说明                           | 类型                                                 | 默认值 |
| ------------- | ------------------------------ | ---------------------------------------------------- | ------ |
| placement     | 弹出位置                       | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom |
| trigger       | 触发下拉行为                   | hover/click/contextmenu                              | hover  |
| hide-on-click | 是否在单击菜单后隐藏菜单       | boolean                                              | true   |
| teleported    | 是否将下拉列表插入至 body 元素 | boolean                                              | true   |
