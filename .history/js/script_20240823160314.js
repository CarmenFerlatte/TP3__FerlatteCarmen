// HH




// LIEN BOUTON externe

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(function () {
                const lienButton2 = document.querySelector('.btn-lien2');
                if (lienButton2) {
                    lienButton2.addEventListener('click', function () {
                        window.open('https://www.facebook.com', '_blank');
                    });
                } else {
                    console.warn('Élément avec la classe .btn-lien2 non trouvé');
                }
            });
        });
            // bouton lien vers la section 1

            document.addEventListener('DOMContentLoaded', function () {
                const lienButton = document.querySelector('.btn-lien');
                if (lienButton) {
                    lienButton.addEventListener('click', function () {
                        document.querySelector('#section-1').scrollIntoView({
                            behavior: 'smooth'
                        });
                    });
                } else {
                    console.warn('Élément avec la classe .btn-lien non trouvé');
                }
            });
        
        }, 100); // Délai de 100ms pour s'assurer que le DOM est chargé.
});
    

