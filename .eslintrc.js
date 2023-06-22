module.exports = {
  root: true,
  env: { node: true },
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  rules: {
    "prettier/prettier": ["warn"],
    "vue/multi-word-component-names": "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
};
