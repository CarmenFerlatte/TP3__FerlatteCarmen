let defferedInstallPrompt = null;
const installButton = document.getElementById('butInstall');

installButton.addEventListener('click', installPWA);

window.addEventListenet('beforeInstallPrompt', afficherButtonInstall);

function afficherBoutonInstall(evt) {
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt) {
    deferredInstallPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true);
    deferredInstallPrompt.userChoice
        .then((choice) => {
            if (choice.outcome === 'accepted') {
                console.log("L'usager a installé la PWA VIA le mon bouton d'installation", choice);
            } else {
                console.log("Lusager a refusé l'installation de la PWA VIA le boutton d'installation", choice);
            }
            deferredInstallPrompt = null;
        });
    
    function logAppInstalled(evt) {
        console.log("L'usager a installé la PWA VIA Les ... de Chrome");
    }
}