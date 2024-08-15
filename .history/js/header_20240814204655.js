

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
    $('#footer').load('assets/php/footer.html');
});