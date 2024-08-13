// bouton lien vers la section 1

document.addEventListener('DOMContentLoaded', function () {
    const lienButton = document.querySelector('.btn-lien');
    lienButton.addEventListener('click', function () {
        document.querySelector('#section-1').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// bouton lien page extene

document.addEventListener('DOMContentLoaded', function () {
    const lienButton = document.querySelector('.btn-lien2');
    lienButton.addEventListener('click', function () {
        window.location.href = 'https://www.facebook.com';
    });
}
