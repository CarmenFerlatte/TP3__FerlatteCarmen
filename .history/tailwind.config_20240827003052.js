/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{html,js,scss}",
    "./js/headerfooter.js",
    
    "./js/install.js",
    "./style/**/*.{html,js,scss}",
    "./style/sass/*{scss}",
    "./style/css/*{css}",
    "./**/*.{html,js,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}