// let currentIndex = 0;
// const slidesToShow = 5; // Number of visible slides
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;
// const sliderWrapper = document.querySelector('.slider-wrapper');

// // Move the slider
// function moveSlide(direction) {
//   currentIndex += direction;

//   // Limit the slider to avoid blank spaces
//   if (currentIndex < 0) {
//     currentIndex = 0;
//   } else if (currentIndex > totalSlides - slidesToShow) {
//     currentIndex = totalSlides - slidesToShow;
//   }

//   updateSliderPosition();
// }

// // Update the slider's transform property
// function updateSliderPosition() {
//   const slideWidth = slides[0].offsetWidth;
//   sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }

// // Touch/Drag functionality
// let isDragging = false;
// let startX = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;

// sliderWrapper.addEventListener('pointerdown', (e) => {
//   isDragging = true;
//   startX = e.clientX || e.touches[0].clientX;
//   sliderWrapper.style.transition = 'none';
// });

// sliderWrapper.addEventListener('pointermove', (e) => {
//   if (!isDragging) return;
//   const currentX = e.clientX || e.touches[0].clientX;
//   const diff = currentX - startX;
//   sliderWrapper.style.transform = `translateX(${prevTranslate + diff}px)`;
// });

// sliderWrapper.addEventListener('pointerup', (e) => {
//   isDragging = false;
//   const endX = e.clientX || e.changedTouches[0].clientX;
//   const diff = endX - startX;

//   if (Math.abs(diff) > 50) {
//     if (diff < 0) moveSlide(1); // Swipe left
//     else moveSlide(-1); // Swipe right
//   } else {
//     updateSliderPosition(); // Snap back
//   }

//   sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
//   prevTranslate = -currentIndex * slides[0].offsetWidth;
// });

// sliderWrapper.addEventListener('dragstart', (e) => e.preventDefault());



let currentIndex = 0;
const slidesToShow = 5; // Number of visible slides
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderWrapper = document.querySelector('.slider-wrapper');

// Move the slider
function moveSlide(direction) {
  currentIndex += direction;

  // Limit the slider to avoid blank spaces
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > totalSlides - slidesToShow) {
    currentIndex = totalSlides - slidesToShow;
  }

  updateSliderPosition();
}

// Update the slider's transform property
function updateSliderPosition() {
  const slideWidth = slides[0].offsetWidth;
  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Disable mouse wheel scrolling
sliderWrapper.addEventListener('wheel', (e) => e.preventDefault());

// Touch/Drag functionality
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

sliderWrapper.addEventListener('pointerdown', (e) => {
  isDragging = true;
  startX = e.clientX || e.touches[0].clientX;
  sliderWrapper.style.transition = 'none';
});

sliderWrapper.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  const currentX = e.clientX || e.touches[0].clientX;
  const diff = currentX - startX;
  sliderWrapper.style.transform = `translateX(${prevTranslate + diff}px)`;
});

sliderWrapper.addEventListener('pointerup', (e) => {
  isDragging = false;
  const endX = e.clientX || e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > 50) {
    if (diff < 0) moveSlide(1); // Swipe left
    else moveSlide(-1); // Swipe right
  } else {
    updateSliderPosition(); // Snap back
  }

  sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
  prevTranslate = -currentIndex * slides[0].offsetWidth;
});

sliderWrapper.addEventListener('dragstart', (e) => e.preventDefault());
