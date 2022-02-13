const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-arrow-right',
    prevEl: '.swiper-arrow-left',
  },
  mousewheel: {
    eventsTarget: '.swiper-wrapper',
    sensitivity: 1,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 800,
  loop: true,
});