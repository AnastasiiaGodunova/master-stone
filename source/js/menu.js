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
