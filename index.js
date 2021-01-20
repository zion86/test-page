// TOGGLE LANG MENU
const langMenu = document.querySelector('.lang-menu'),
  subMenu = document.querySelector('.sub-menu');

langMenu.addEventListener('click', () => {
  subMenu.classList.toggle('sub-menu--show');
});

// SCROLL PAGE
const scrollBtn = document.querySelector('.scroll-btn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= document.documentElement.clientHeight) {
    scrollBtn.classList.add('scroll-btn--active');
  } else {
    scrollBtn.classList.remove('scroll-btn--active');
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});


// SLAIDERS
var swiper1 = new Swiper('.main-slider', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper2 = new Swiper('.slider', {
  navigation: {
    nextEl: '.slider__btn--prev',
    prevEl: '.slider__btn--next',
  },
  loop: true,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1230: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});