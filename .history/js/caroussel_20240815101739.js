// Caroussel d'images de mes projets

    function nextImage(button) {
        const carousel = button.parentElement.querySelector('.carousel');
        const images = carousel.querySelectorAll('img');
        let currentIndex = Array.from(images).findIndex(img => !img.classList.contains('hidden'));
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('hidden');
    }

    function prevImage(button) {
        const carousel = button.parentElement.querySelector('.carousel');
        const images = carousel.querySelectorAll('img');
        let currentIndex = Array.from(images).findIndex(img => !img.classList.contains('hidden'));
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.remove('hidden');
    }