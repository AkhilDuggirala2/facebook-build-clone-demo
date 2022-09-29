// rectangle

const postinput = document.querySelector('.post-input');
const cross = document.querySelector('.fa-circle-xmark');
const back = document.querySelector('.back');
const rectanglebox = document.querySelector('.rectangle-box');

postinput.addEventListener('click', () => {
  rectanglebox.classList.add('active');
  cross.classList.add('active');
  back.classList.add('active');
})
cross.addEventListener('click', () => {
  rectanglebox.classList.remove('active');
  cross.classList.remove('active');
  back.classList.remove('active');
})