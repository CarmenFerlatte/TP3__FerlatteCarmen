/

// bouton lien page extene

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
  }, 100); // Délai de 100ms pour s'assurer que le COM est chargé.
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