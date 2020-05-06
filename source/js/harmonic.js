'use strict';

let productionItem = document.querySelectorAll('.production-item');

for (let i = 0; i < productionItem.length; i++) {
  productionItem[i].addEventListener('click', function() {
    this.classList.toggle('production-item--close');
  })
}
