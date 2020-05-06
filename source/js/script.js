'use strict';

let navToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector('.main-nav__list');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('main-nav__toggle--close');
  if (navToggle.classList.contains('main-nav__toggle--close')) {
    navList.style.display = 'block';
  } else {
    navList.style.display = 'none';
  }
});

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('up-button-shown');
  } else {
    upButton.classList.remove('up-button-shown');
  }
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};

let orderButton = document.querySelector('.main-nav__button');
let popup = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let modalClose = popup.querySelector('.modal__close');
let feedbackName = popup.querySelector('[name=name]');

orderButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
  overlay.style.display = 'block';
  feedbackName.focus();
});

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal--show');
  overlay.style.display = 'none';
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
      overlay.style.display = 'none';
    }
  }
});
