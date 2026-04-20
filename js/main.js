const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const bodyLock = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  bodyLock.classList.toggle('scroll-lock');
});

const swiper = new Swiper('.swiper', {
  effect: 'fade',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const items = document.querySelectorAll('.tours__item');
items.forEach((element) => {
  element.addEventListener('click', () => {
    items.forEach((el) => el.classList.remove('tours__item--active'));

    element.classList.add('tours__item--active');
  });
});
