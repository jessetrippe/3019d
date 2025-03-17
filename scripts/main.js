function initSlideshow() {
  const slideshow = document.getElementById('slideshow');
  if (!slideshow) return;

  const images = slideshow.getElementsByTagName('img');
  let currentIndex = 0;

  function showNextImage() {
	images[currentIndex].classList.add('opacity-0');
	currentIndex = (currentIndex + 1) % images.length;
	images[currentIndex].classList.remove('opacity-0');
  }

  setInterval(showNextImage, 9000);
}

document.addEventListener('DOMContentLoaded', initSlideshow);