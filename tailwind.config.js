const { pxToEm, fontFallbacks } = require('./tailwindUtilities.js')

module.exports = {
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [],
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ]
}
