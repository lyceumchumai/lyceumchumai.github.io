const navToggler = document.querySelector(".nav_toggler")
const navList = document.querySelector(".nav ul")

navToggler.addEventListener("click", ()=>{
  navToggler.classList.toggle("fa-bars")
  navToggler.classList.toggle("fa-xmark")
  navList.classList.toggle("open")
})