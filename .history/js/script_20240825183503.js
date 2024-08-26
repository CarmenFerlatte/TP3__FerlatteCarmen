// LIEN BOUTON externe

document.addEventListener('DOMContentLoaded', function () {
    // Délai de 100ms pour s'assurer que le DOM est chargé.
    setTimeout(function () {
        // Gestionnaire pour le bouton avec la classe .btn-lien2
        const lienButton2 = document.querySelector('.btn-lien2');
        if (lienButton2) {
            lienButton2.addEventListener('click', function () {
                window.open('https://www.facebook.com/cfweb.ca', '_blank');
            });
        } else {
            console.warn('Élément avec la classe .btn-lien2 non trouvé');
        }

        // Gestionnaire pour le bouton avec la classe .btn-lien
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
    }, 100); // Délai de 100ms pour s'assurer que le DOM est chargé.
}
);


// ACCORDEON

document.addEventListener("DOMContentLoaded", function () { 
    let elements = document.querySelectorAll("[data-menu]");
    elements.forEach(function (main) { 

        main.addEventListener("click", function () {
            let element = main.parentElement.parentElement;
            let indicators = main.querySelectorAll("img");
            let child = element.querySelector(".menu");
            let h = element.querySelector(".mainHeading>div>p");

            if (h) {
                h.classList.toggle("font-semibold");
            }
            if (child) {
                child.classList.toggle("hidden");
                console.log(indicators[0]);
            }
            if (indicators) {
                indicators[0].classList.toggle("rotate-180");
            }

        });
    });
});
 

// CAROUSEL SLIDER script.js

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelectorAll('.animation-carousel');

    caroussels.forEach(carousse);
    const items = carousel.querySelectorAll('[data-carousel-item]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            showItem(currentIndex);
        });

        showItem(currentIndex);
    });

    

