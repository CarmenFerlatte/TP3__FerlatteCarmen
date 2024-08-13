// bouton lien vers la section 1

document.addEventListener('DOMContentLoaded', function () {
    const lienButton = document.query('.btn-lien');
    lienButton.addEventListener('click', function () {
        document.querySelector('.section-1').scrollIntoView({
            behavior: 'smooth'
        });
    });
    });
