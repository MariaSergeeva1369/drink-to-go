const slider = document.querySelector('.swiper');
const mainBlock = document.querySelector('.main-block__wrapper');

const BGCOLOR__MAIN = "#f3ebe1";
const BGCOLOR__GRAY = "#E5E6E8";
const BGCOLOR__LAVENDER = "#EAE6FC";

const BGCOLOR__GRADIENT__MAIN = "linear-gradient(to bottom, #f3ebe1 77%, #ffffff 77%, #ffffff 100%)";
const BGCOLOR__GRADIENT__LAVENDER = "linear-gradient(to bottom, #EAE6FC 77%, #ffffff 77%, #ffffff 100%)";
const BGCOLOR__GRADIENT__GRAY = "linear-gradient(to bottom, #E5E6E8 77%, #ffffff 77%, #ffffff 100%)";

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  },
);

mySwiper.on('transitionStart',() => {
  const realIndex = mySwiper.realIndex;
  const windowInnerWidth = window.innerWidth;

  if ( windowInnerWidth >= 768 && windowInnerWidth < 1440) {
    switch(realIndex) {
      case 1:
        mainBlock.style.background = BGCOLOR__GRADIENT__LAVENDER;
        break
      case 2:
        mainBlock.style.background = BGCOLOR__GRADIENT__GRAY;
        break
      default:
      mainBlock.style.background = BGCOLOR__GRADIENT__MAIN;
    }
  } else {
    switch(realIndex) {
      case 1:
        mainBlock.style.background = BGCOLOR__LAVENDER;
        break
      case 2:
        mainBlock.style.background = BGCOLOR__GRAY;
        break
      default:
      mainBlock.style.background = BGCOLOR__MAIN;
    }
  }
})
