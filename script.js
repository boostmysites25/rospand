const imagesContainer = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images .carousel-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const carouselText = document.querySelectorAll('.carousel-text');

let currentIndex = 0;

// Calculate total width dynamically to ensure no gaps
const updateCarouselWidth = () => {
    imagesContainer.style.width = `${images.length * 100}%`;
    images.forEach((img) => {
        img.style.width = `${100 / images.length}%`;
    });
};

// Function to update the carousel position and text
function updateCarousel() {
    const offset = -currentIndex * (100 / images.length); // Adjust offset for the current image
    imagesContainer.style.transform = `translateX(${offset}%)`;
    
    // Hide all text
    carouselText.forEach((text) => text.style.opacity = '0');
    
    // Show text for the current image
    carouselText[currentIndex].style.opacity = '1';
}

// Event listeners for navigation arrows
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Initialize carousel on load
updateCarouselWidth();
updateCarousel();




