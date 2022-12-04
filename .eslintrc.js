module.exports = {
  root: true,
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
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
};
