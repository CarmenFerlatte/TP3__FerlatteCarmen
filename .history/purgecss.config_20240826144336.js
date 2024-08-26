module.exports = {
  content: ['./**/*.html', './**/*.js'], // Chemins vers vos fichiers HTML et JS
  css: ['./style/css/style.css'], // Chemin vers votre fichier CSS
  safelist: [], // Classes à ne pas supprimer
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};