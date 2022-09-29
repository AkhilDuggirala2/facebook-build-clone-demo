
const rectanglebox1 = document.querySelector('.rectangle-box-1');
const bars = document.querySelector('.fa-bars');

bars.addEventListener('click', () => {
  rectanglebox1.classList.toggle('active');
})

