// Script pour l'installation de la PWA

document.addEventListener('DOMContentLoaded', function () {
    let deferredinstall = null;
    const installButton = document.getElementById('butInstall');

    installButton.addEventListener('click', installPWA);

    window.addEventListener('beforeinstallprompt', afficherBoutonInstall);

    function afficherBoutonInstall(evt) {
        deferredinstall = evt;
        installButton.removeAttribute('hidden');
    }

    function installPWA(evt) {
        deferredinstall.prompt();
        evt.srcElement.setAttribute('hidden', true);
        deferredinstall.userChoice
            .then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log("L'usager a installé la PWA VIA le mon bouton d'installation", choice);
                } else {
                    console.log("L'usager a refusé l'installation de la PWA VIA le bouton d'installation", choice);
                }
                deferredinstall = null;
            });
        
    window.addEventListener('appInstalled', logAppInstalled);

    function logAppInstalled(evt) {
        console.log("L'usager a installé la PWA VIA Les ... de Chrome");
        }
    }
});
