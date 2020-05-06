    <footer class="page-footer">
      <div class="page-footer__wrapper">
        <a class="page-footer__logo">
          <img class="page-footer__logo-image" src="img/logo.jpg" width="100" height="100">
          <p class="page-footer__logo-text">Мастер Камня</p>
        </a>
        <ul class="page-footer__list">
          <li class="page-footer__item"><a href="#">О нас</a></li>
          <li class="page-footer__item"><a href="#">Способы оплаты</a></li>
          <li class="page-footer__item"><a href="#">Партнёрам</a></li>
        </ul>
        <ul class="page-footer__list-contacts">
          <li class="page-footer__item page-footer__item--tel">
            <svg class="contacts__item-icon" width="40" height="40">
              <use xlink:href="img/sprite/sprite.svg#phone"></use>
            </svg>
            <a href="tel:8 800 123 4567">+7 920 015-27-05</a>
          </li>
          <li class="page-footer__item page-footer__item--email">
            <svg class="contacts__item-icon" width="40" height="40">
              <use xlink:href="img/sprite/sprite.svg#email"></use>
            </svg>
            <a href="mailto:master.stone@gmail.com">master.stone@gmail.com</a>
          </li>
          <li class="page-footer__item">
            <svg class="contacts__item-icon" width="40" height="40">
              <use xlink:href="img/sprite/sprite.svg#instagram"></use>
            </svg>
            <a href="#">Мы в Instagram</a>
          </li>
        </ul>
      </div>
      <p class="page-footer__text">© 2012–2020 ООО «Мастер камня»</p>
    </footer>
    <div class="modal">
      <h2 class="modal__title">Заказать звонок</h2>
      <form method="post" action="mail.php" class="modal__form">
        <button class="modal__close" type="button"><span class="visually-hidden">Закрыть</span></button>
        <div class="modal__form-wrapper">
          <label for="modal__name">Ваше имя</label>
          <input class="modal__input" type="text" name="name" id="modal__name" placeholder="Как вас зовут?" required>
        </div>
        <div class="modal__form-wrapper">
          <label for="modal__phone">Ваш номер телефона</label>
          <input class="modal__input" type="tel" name="tel" id="modal__phone" placeholder="Введите свой номер" required>
        </div>
        <button class="button modal__button" type="submit">Заказать</button>
      </form>
    </div>
    <button class="up-button" type="button">↑<span class="visually-hidden">Наверх</span></button>
    <div class="overlay"></div>
    <script src="js/script.min.js"></script>
    <script src="js/slider.min.js"></script>
    <script src="js/svg4everybody.min.js"></script>
    <script>svg4everybody();</script>
  </body>
</html>
