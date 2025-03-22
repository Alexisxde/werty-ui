/** @type {import('prettier').Config} */
module.exports = {
  trailingComma: "none",
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  useTabs: true,
  objectWrap: "collapse",
  plugins: ['prettier-plugin-tailwindcss'],
};
