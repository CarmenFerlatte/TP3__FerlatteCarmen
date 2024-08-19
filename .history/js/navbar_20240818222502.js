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
