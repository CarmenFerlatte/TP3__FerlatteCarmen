// Script pour l'installation de la PWA

document.addEventListener('DOMContentLoaded', function () {
    let def = null;
    const installButton = document.getElementById('butInstall');

    installButton.addEventListener('click', installPWA);

    window.addEventListener('beforeinstallprompt', afficherBoutonInstall);

    function afficherBoutonInstall(evt) {
        def = evt;
        installButton.removeAttribute('hidden');
    }

    function installPWA(evt) {
        def.prompt();
        evt.srcElement.setAttribute('hidden', true);
        def.userChoice
            .then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log("L'usager a installé la PWA VIA le mon bouton d'installation", choice);
                } else {
                    console.log("L'usager a refusé l'installation de la PWA VIA le bouton d'installation", choice);
                }
                def = null;
            });
    

    function logAppInstalled(evt) {
        console.log("L'usager a installé la PWA VIA Les ... de Chrome");
        }
    }
});
