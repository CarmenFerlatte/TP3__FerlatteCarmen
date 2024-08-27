// Script pour l'installation de la PWA


function installPWA(evt) {
    // CODELAB: Save the event & show the install button.
    // CODELAB: Log user response to prompt.

    // Add code show install prompt & hide the install button.
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        // Hide the install button, it can't be called twice.
        evt.srcElement.setAttribute('hidden', true);
        // Log user response to prompt.
        deferredInstallPrompt.userChoice
            .then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log("L'usager a installé la PWA VIA les mon boutton d'installation", choice);
                } else {
                    console.log("L'usager a refusé l'installation de la PWA VIA le boutton d'installation", choice);
                }
                deferredInstallPrompt = null;
            });
    } else {
        console.error("deferredInstallPrompt is null");
    }
}

function logAppInstalled(evt) {
    console.log("L'usager a installé la PWA VIA LES ... de Chrome");
}
