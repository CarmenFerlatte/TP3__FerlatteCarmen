const menuToggle = document.getElementById('menu-toggle');
        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                menu.classList.remove('hidden');
                menu.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4');
            }
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                menu.classList.remove('hidden', 'flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4');
                menu.classList.add('md:flex', 'md:items-center');
                menuToggle.checked = false;
            } else if (!menuToggle.checked) {
                menu.classList.add('hidden');
                menu.classList.remove('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4');
            }
        });

// Navbar hidden on scroll down

document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('.nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function ("scroll", function () {
        let scr
    }) {
