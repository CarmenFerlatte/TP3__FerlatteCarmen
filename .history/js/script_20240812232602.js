// bouton lien vers la section 1

document.addEventListener('DOMContentLoaded', function () {
    const lienButton = document.getElementById('.b');
    lienButton.addEventListener('click', function () {
        document.querySelector('.section-1').scrollIntoView({
            behavior: 'smooth'
        });
    });
    });
