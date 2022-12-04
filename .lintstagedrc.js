module.exports = {
  "*.{js,ts,jsx,tsx}": ["eslint --fix"],
  "*.{vue}": ["stylelint --fix", "eslint --fix"],
  "*.{scss, css, less}": ["stylelint --fix", "prettier --write"],
  "*.{json, md}": ["prettier --write"],
};
