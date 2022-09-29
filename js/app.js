// rectangle

const headeraccount = document.querySelector('.header-account');
const cross = document.querySelector('.fa-xmark');
const black = document.querySelector('.black');
const rectangle = document.querySelector('.rectangle');

headeraccount.addEventListener('click', () => {
  rectangle.classList.add('active');
  cross.classList.add('active');
  black.classList.add('active');
})
cross.addEventListener('click', () => {
  rectangle.classList.remove('active');
  cross.classList.remove('active');
  black.classList.remove('active');
})
