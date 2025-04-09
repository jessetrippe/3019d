function initSlideshow() {
  const slideshow = document.getElementById('slideshow');
  if (!slideshow) return;

  const images = slideshow.getElementsByTagName('img');
  let currentIndex = 0;
  
  images[0].classList.remove('hidden', 'opacity-0');

  function showNextImage() {
    const currentImage = images[currentIndex];
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];

    // Start fade out
    currentImage.classList.add('opacity-0');

    // Prepare next image
    nextImage.classList.remove('hidden'); // reveal if hidden
    setTimeout(() => {
      nextImage.classList.remove('opacity-0'); // fade in
    }, 20); // slight delay to trigger transition

    // After fade completes, hide old image
    setTimeout(() => {
      currentImage.classList.add('hidden');
      currentIndex = nextIndex;
    }, 1000); // match transition duration
  }

  setInterval(showNextImage, 9000);
}

document.addEventListener('DOMContentLoaded', initSlideshow);

// Get references to DOM elements
const photoDialog = document.getElementById("photoDialog");
const modalImage = document.getElementById("modalImage");
const closeButton = document.getElementById("closeButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const thumbnailRow = document.getElementById("thumbnailRow");
const viewAll = document.getElementById("viewAll");
const images = document.querySelectorAll("#photo-carousel img");

// Store image sources and current index
const imageSrcList = [...images].map(img => img.src);
let currentImageIndex = 0;

// Ensure modal starts hidden on page load
document.addEventListener("DOMContentLoaded", () => {
  photoDialog.close();
  photoDialog.style.display = "none";
  modalImage.classList.add("hidden");
});

// Open modal when an image is clicked
images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

viewAll.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior if it's a <a> tag
  openModal(0); // Open the modal at the first image
});

function openModal(index) {
  currentImageIndex = index;
  updateModalImage();
  photoDialog.style.display = "flex";
  photoDialog.showModal();
}

// Close modal and reset image to prevent flash
function closeModal() {
  modalImage.classList.add("hidden");
  modalImage.src = "";
  photoDialog.close();
  photoDialog.style.display = "none";
}

// Update modal image
function updateModalImage() {
  modalImage.src = imageSrcList[currentImageIndex];
  modalImage.classList.remove("hidden");

  // Highlight selected thumbnail
  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.classList.toggle("active-thumbnail", i === currentImageIndex);
  });
}

// Navigate images
function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + imageSrcList.length) % imageSrcList.length;
  updateModalImage();
}

// Add event listeners
closeButton.addEventListener("click", closeModal);
prevButton.addEventListener("click", () => changeImage(-1));
nextButton.addEventListener("click", () => changeImage(1));

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!photoDialog.open) return;
  if (e.key === "ArrowLeft") changeImage(-1);
  if (e.key === "ArrowRight") changeImage(1);
  if (e.key === "Escape") closeModal();
});

// Close modal when clicking outside the image
photoDialog.addEventListener("click", (e) => {
  if (e.target === photoDialog) closeModal();
});

document.addEventListener("DOMContentLoaded", function () {
  const openMenuButtonContainer = document.getElementById("openMenuButtonContainer");

  function toggleButtonVisibility() {
    if (window.scrollY >= window.innerHeight) {
      openMenuButtonContainer.classList.remove("opacity-0");
    } else {
      openMenuButtonContainer.classList.add("opacity-0");
    }
  }

  window.addEventListener("scroll", toggleButtonVisibility);
  toggleButtonVisibility(); // Run on load
});

  const openMenuButton = document.getElementById("openMenuButton");
  const menuBackdrop = document.getElementById("menuBackdrop");
  const openMenuButton2 = document.getElementById("openMenuButton2");
  const menu = document.getElementById("verticalMenu");
  const closeMenuButton = document.getElementById("closeMenuButton");
  
  openMenuButton2.addEventListener("click", toggleMenu);
  openMenuButton.addEventListener("click", toggleMenu);
  closeMenuButton.addEventListener("click", toggleMenu);
  menuBackdrop.addEventListener("click", toggleMenu);
    
  function toggleMenu() {
    menu.classList.toggle("hidden");
  }
  
  const details = document.querySelector('details');
  document.addEventListener('click', function(e){
    if(!details.contains(e.target)){
      details.removeAttribute('open')
    }
  })