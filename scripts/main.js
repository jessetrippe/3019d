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

// Get references to DOM elements
const photoDialog = document.getElementById("photoDialog");
const modalImage = document.getElementById("modalImage");
const closeButton = document.getElementById("closeButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const thumbnailRow = document.getElementById("thumbnailRow");
const navPhotosLink = document.getElementById("nav-photos-link");
const navPhotosLink2 = document.getElementById("nav-photos-link2");
const images = document.querySelectorAll("#photo-carousel img");

// Store image sources and current index
const imageSrcList = [...images].map(img => img.src);
let currentImageIndex = 0;

// Ensure modal starts hidden on page load
document.addEventListener("DOMContentLoaded", () => {
  photoDialog.close();
  photoDialog.style.display = "none";
  modalImage.classList.add("hidden");
  generateThumbnails();
});

// Open modal when an image is clicked
images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

navPhotosLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior if it's a <a> tag
  openModal(0); // Open the modal at the first image
});

navPhotosLink2.addEventListener("click", (e) => {
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
  modalImage.src = ""; // Reset src to prevent flash of previous image
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

// Generate thumbnail images below the modal
function generateThumbnails() {
  thumbnailRow.innerHTML = ""; // Clear existing thumbnails before regenerating

  imageSrcList.forEach((src, index) => {
    const thumbContainer = document.createElement("div");
    thumbContainer.className = "thumbnailContainer h-16 w-16 border-2 cursor-pointer flex items-center justify-center opacity-75 hover:opacity-100 transition";

    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.className = "h-full w-full object-cover";
    thumb.addEventListener("click", () => openModal(index));

    thumbContainer.appendChild(thumb);
    thumbnailRow.appendChild(thumbContainer);
  });
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
  const openMenuButton = document.getElementById("openMenuButton");

  function toggleButtonVisibility() {
    if (window.scrollY >= window.innerHeight) {
      openMenuButton.classList.remove("opacity-0");
      openMenuButton.classList.add("cursor-pointer");
    } else {
      openMenuButton.classList.add("opacity-0");
      openMenuButton.classList.remove("cursor-pointer");
    }
  }

  window.addEventListener("scroll", toggleButtonVisibility);
  toggleButtonVisibility(); // Run on load
});

  const openMenuButton = document.getElementById("openMenuButton");
  const openMenuButton2 = document.getElementById("openMenuButton2");
  const menu = document.getElementById("verticalMenu");
  const closeMenuButton = document.getElementById("closeMenuButton");
 openMenuButton2.addEventListener("click", toggleMenu);
  openMenuButton.addEventListener("click", toggleMenu);
  closeMenuButton.addEventListener("click", toggleMenu);
    
  function toggleMenu() {
    menu.classList.toggle("translate-x-full");
  }