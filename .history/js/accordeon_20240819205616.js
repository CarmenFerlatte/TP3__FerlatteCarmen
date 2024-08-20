// Accordeon menu

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
            }
            if (indicators) {
                indicators[0].classList.toggle("rotate-180");
            }

            h.classList.toggle("font-semibold");
            child.classList.toggle("hidden");
            // console.log(indicators[0]);
            indicators[0].classList.toggle("rotate-180");
        });
 };
