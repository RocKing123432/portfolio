/* AUTO-SWIPING SLIDER (1 seconds) */
let index = 0;
const slides = document.getElementById("slideContainer");
const totalSlides = 5;

function autoSlide() {
    index = (index + 1) % totalSlides;
    slides.style.transform = "translateX(" + (-index * 100) + "%)";
}

setInterval(autoSlide, 2000); // every 2 seconds