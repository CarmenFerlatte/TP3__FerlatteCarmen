let defferedInstallPrompt = null;
const installButton = document.getElementById('butInstall');

installButton.addEventListener('click', installPWA);

window.addEventListenet('beforeinstallprompt', afficherButtonInstall);