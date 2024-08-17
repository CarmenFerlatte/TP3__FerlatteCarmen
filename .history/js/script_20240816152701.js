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
        console.error('Bouton non trouvé');
    }
});

// bouton lien page extene

document.addEventListener('DOMContentLoaded', function () {
    if {}
    const lienButton = document.querySelector('.btn-lien2');
    lienButton.addEventListener('click', function () {
        window.open('https://www.facebook.com', '_blank');
    });
});

// accordeon //

// let elements = document.querySelectorAll("[data-menu]");
// for (let i = 0; i < elements.length; i++) {
//     let main = elements[i];

//     main.addEventListener("click", function () {
//         let element = main.parentElement.parentElement;
//         let indicators = main.querySelectorAll("img");
//         let child = element.querySelector("#menu");
//         let h = element.querySelector("#mainHeading>div>p");

//         h.classList.toggle("font-semibold");
//         child.classList.toggle("hidden");
//         // console.log(indicators[0]);
//         indicators[0].classList.toggle("rotate-180");
//     });
//     };