// script.js
document.addEventListener("DOMContentLoaded", function () {
    const slidersContainer = document.querySelectorAll(".slider-container");

    slidersContainer.forEach((container) => {
        const slider = container.querySelector(".sliders");
        const slides = container.querySelectorAll(".slidesr");
        let currentIndex = 0;

        function slideTo(index) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            slideTo(currentIndex);
        }

        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    });
});
