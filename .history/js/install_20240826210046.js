// Script pour l'installation de la PWA


let deferredPrompt;
const butInstall = document.getElementById('butInstall');

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt event triggered');
    // Empêcher l'affichage de la bannière d'installation par défaut
    e.preventDefault();
    // Sauvegarder l'événement pour l'utiliser plus tard
    deferredPrompt = e;
    // Afficher le bouton d'installation
    butInstall.hidden = false;
});

butInstall.addEventListener('click', async () => {
    console.log('Install button clicked');
    // Masquer le bouton d'installation
    butInstall.hidden = true;
    // Afficher la bannière d'installation
    deferredPrompt.prompt();
    // Attendre la réponse de l'utilisateur
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`L'utilisateur a choisi: ${outcome}`);
    // Réinitialiser deferredPrompt
    deferredPrompt = null;
});
