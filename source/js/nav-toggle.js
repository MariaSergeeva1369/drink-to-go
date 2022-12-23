const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const isEscapeKey = (evt) => evt.key === 'Escape';

navMain.classList.remove('main-nav--nojs');

function closeMenulOnEscape (evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    navMain.classList.remove('main-nav--opened')
    navMain.classList.add('main-nav--closed');
  }
}

function closeMenu () {
  navMain.classList.remove('main-nav--opened')
  navMain.classList.add('main-nav--closed');

  document.removeEventListener('keydown', closeMenulOnEscape);
}

function openMenu () {
  navMain.classList.remove('main-nav--closed')
  navMain.classList.add('main-nav--opened');

  document.addEventListener('keydown', closeMenulOnEscape);
}

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    return openMenu();
  } else {
    return closeMenu();
  }
});
