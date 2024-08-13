// bouton lien vers la section 1

document.addEventListener('DOMContentLoaded', function () {
    const lienButton = document.querySelector('.btn-lien');
    lienButton.addEventListener('click', function () {
        window.scrollIntoView({
            behavior: 'smooth'
        });
    });
    });
