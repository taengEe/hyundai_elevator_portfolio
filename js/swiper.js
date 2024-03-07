// const mainSwiper = new Swiper('.main-visual-slider', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   effect: "fade",
//   autoplay: {
//     delay: 2500,
//   },
//   // If we need pagination
//   pagination: {
//     el: '.main-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.main-prev',
//     prevEl: '.main-next',
//   },
// });
const mainSwiper = new Swiper('.main-visual-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
   },
  // If we need pagination
  pagination: {
    el: '.main-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'; // 각 페이지네이션 버튼에 숫자 표시
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.main-next',
    prevEl: '.main-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const pjSwiper = new Swiper('.pj-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    768 : {
      slidesPerView: 3,

    },
    300: {
      slidesPerView: 1,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.pj-next',
    prevEl: '.pj-prev',
  },
});