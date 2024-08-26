module.exports = {
  content: ['./**/*.html', './**/*.js'], // Chemins vers vos fichiers HTML et JS
  css: ['./style/css/style.css'], // Chemin vers votre fichier CSS
  output: './style/css/style.purged.css', // Chemin de sortie pour le fichier CSS purgé
  safelist: [], // Classes à ne pas supprimer
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};