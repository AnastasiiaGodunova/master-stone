'use strict';

let slides = document.querySelectorAll('.slide__item');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);
let next = document.querySelector('.control__next');
let previous = document.querySelector('.control__previous');

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide__item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide__item slide__item--showing';
}

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};
