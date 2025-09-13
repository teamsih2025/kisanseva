// Full-width Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-img'));
    const leftBtn = document.querySelector('.carousel-btn.left');
    const rightBtn = document.querySelector('.carousel-btn.right');
    let currentIndex = 0;
    let autoSlideInterval;

    function goToSlide(idx) {
        currentIndex = idx;
        track.style.transform = `translateX(-${idx * 100}vw)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }

    leftBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    rightBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3500);
    }
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    goToSlide(0);
    startAutoSlide();
});