import { defineConfig } from "vitepress";

export default defineConfig({
  title: "简单UI",
  description: "一个极其简单的组件库",
  base: "/simple-ui/",
  themeConfig: {
    outline: [2, 3],
    sidebar: [
      {
        text: "组件",
        items: [
          { text: "Button", link: "/button" },
          { text: "Toast", link: "/toast" },
          { text: "DropDown", link: "/dropDown" },
          { text: "Preview", link: "/preview" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/mrxu0/simple-ui/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/mrxu0/simple-ui" },
    ],
  },
});
