// Header and footer loading script

$(function () {
    $('#header').load('assets/php/header.html', function() {
        let navbar = document.querySelector('.bg-animated');
        if (navbar) {
            let lastScrollTop = 0;

            window.addEventListener('scroll', function () {
                let scrollTop = window.scrollY || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    // Scroll down
                    navbar.classList.add('navbar-hidden');
                } else {
                    // Scroll up
                    navbar.classList.remove('navbar-hidden');
                }

                    lastScrollTop = scrollTop;
            });
        } else {
            console.error('Navbar not found');
        }
    });
    $('#footer').load('assets/php/footer.html', function (response, status, xhr) {
        if (status === "error") {
            console.error("Erreur de chargement du pied de page: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Le pied de page a été chargé avec succès");
        }
    });
});


// Navbar script

// Navbar menu toggle

$(function() {
    $('#header').load('assets/php/header.html', function () {
        // Initialisation du script navbar.js après le chargement du contenu de la balise <header>	
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('change', function () {
            if (this.checked) {
                menu.classList.remove('hidden');
                menu.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4');
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                menu.classList.remove('hidden', 'flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4');
                menu.classList.add('md:flex', 'md:items-center');
                menuToggle.checked = false;
            } else if (!menuToggle.checked) {
                menu.classList.add('hidden');
                menu.classList.remove('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4');
            }
        });
    });
});


// Fin

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
                console.log(indicators[0]);
            }
            if (indicators) {
                indicators[0].classList.toggle("rotate-180");
            }

        });
    });
 });






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
    

