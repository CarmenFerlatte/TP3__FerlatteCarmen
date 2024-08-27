// Script pour l'installation de la PWA

document.addEventListener('DOMContentLoaded', function () {
    let deferedInstallPrompt = null;
    const installButton = document.getElementById('butInstall');

    if (installButton) {
        installButton.addEventListener('click', installPWA);
    } else {
        console.error("Element butInstall non trouvé");
    }

    window.addEventListener('beforeInstallPrompt', afficherBoutonInstall);

    function afficherBoutonInstall(evt) {
        deferedInstallPrompt = evt;
        installButton.removeAttribute('hidden');
    }

    function installPWA(evt) {
        deferedInstallPrompt.prompt();
        evt.srcElement.setAttribute('hidden', true);
        deferedInstallPrompt.userChoice
            .then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log("L'usager a installé la PWA VIA le mon bouton d'installation", choice);
                } else {
                    console.log("L'usager a refusé l'installation de la PWA VIA le bouton d'installation", choice);
                }
                deferedInstallPrompt = null;
            });
    }

    window.addEventListener('appinstalled', logAppInstalled);

    function logAppInstalled(evt) {
        console.log("L'usager a installé la PWA VIA Les ... de Chrome");
    }
});