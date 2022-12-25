import { defineConfig } from "vitepress";

export default defineConfig({
  title: "简单UI",
  description: "一个极其简单的组件库",
  base: "simple-ui",
  themeConfig: {
    outline: [2, 3],
    // 右上角的导航
    // nav: [{ text: "Toast", link: "/toast" }],
    sidebar: [
      {
        items: [{ text: "主题", link: "theme" }],
      },
      {
        text: "组件",
        items: [
          { text: "Button", link: "/button" },
          { text: "Toast", link: "/toast" },
          { text: "DropDown", link: "/dropDown" },
        ],
      },
    ],
  },
});
