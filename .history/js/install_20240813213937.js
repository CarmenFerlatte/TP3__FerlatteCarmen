let defferedInstallPrompt = null;
const installButton = document.getElementById('butInstall');

installButton.addEventListener('click', installPWA);

window.addEventListenet('beforeInstallPrompt', afficherButtonInstall);

function afficherBoutonInstall(evt)