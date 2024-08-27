/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{html,js,scss}",
    "./js/headerfooter.js",
    "./js/script.js",
    "./js/validate.js",
    "./js/install.js",
    "./style/sass/_caroussel.scss",
    "./style/sass/_footer.scss",
    
    "./style/css/*{css}",
    "./**/*.{html,js,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}