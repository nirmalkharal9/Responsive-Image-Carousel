let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start the auto-slide when the page loads
window.onload = function () {
  startAutoSlide();
};

// Stop auto-slide when user interacts with the controls
document
  .querySelector(".carousel-control.prev")
  .addEventListener("click", function () {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

document
  .querySelector(".carousel-control.next")
  .addEventListener("click", function () {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });
