document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel img');
  let currentIndex = 0;
  const totalImages = images.length;

  function slideCarousel() {
    if (totalImages === 0) return; // Exit if no images
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to first image
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Auto-slide every 3 seconds
  setInterval(slideCarousel, 10000);
});