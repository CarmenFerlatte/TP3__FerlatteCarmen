let defferedInstallPrompt = null;
const installButton = document.getElementById('butInstall');

installButton.addEventListener('click', installPWA);

window.addEventListenet('beforeInstallPrompt', afficherButtonInstall);

function afficherBoutonInstall(evt) {
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt) {
    defferredInstallPrompt.prompt
}