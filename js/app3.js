const headerimg1 = document.querySelector(".headerimg1");
const rectanglebox2 = document.querySelector(".rectangle-box-2");

headerimg1.addEventListener("click" , () => {
  rectanglebox2.classList.toggle("active");
})