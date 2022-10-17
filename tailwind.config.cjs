/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}",
  ],
  theme: {},
  plugins: [
    require("@brainandbones/skeleton/tailwind/theme.cjs"),
    require("@tailwindcss/typography"),
  ],
};
