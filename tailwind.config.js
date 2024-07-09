  // tailwind.config.js
  module.exports = {
   content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
   ],
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("tw-elements/dist/plugin.cjs"),
      require("flowbite/plugin")
    ],
    darkMode: "class"
  }