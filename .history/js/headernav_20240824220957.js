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
            console.log('Menu toggle checked:', this.checked);
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
            console.log('Window width:', window.innerWidth);
        });
    });
});

    

// footer loading script    
    $('#footer').load('assets/php/footer.html', function (response, status, xhr) {
        if (status === "error") {
            console.error("Erreur de chargement du pied de page: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Le pied de page a été chargé avec succès");
        }
    });
});

