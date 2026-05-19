/* 
  Hero Slider Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('heroSlider');
    const dotsContainer = document.getElementById('sliderDots');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 6000;

    // Create Dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        const offset = -currentSlide * (100 / slides.length);
        sliderContainer.style.transform = `translateX(${offset}%)`;
        
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
            dots[index].classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    let itv = setInterval(nextSlide, slideInterval);

    function resetInterval() {
        clearInterval(itv);
        itv = setInterval(nextSlide, slideInterval);
    }

    updateSlider();
});
