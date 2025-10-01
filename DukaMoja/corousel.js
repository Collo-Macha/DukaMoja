const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('img');
const totalImages = images.length;
let currentIndex = 0;
let autoSlide;

function showSlide(index) {
  if (index >= totalImages) currentIndex = 0;
  else if (index < 0) currentIndex = totalImages - 1;
  else currentIndex = index;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
  resetAutoSlide();
}

function prevSlide() {
  showSlide(currentIndex - 1);
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 10000); // 10 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Initial setup
showSlide(currentIndex);
startAutoSlide();