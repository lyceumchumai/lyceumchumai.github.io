const navToggler = document.querySelector(".nav_toggler")
const navList = document.querySelector(".nav ul")
const navItems = navList.querySelectorAll("li")

const toggleNavMenu = () => {
  navToggler.classList.toggle("fa-bars")
  navToggler.classList.toggle("fa-xmark")
  navList.classList.toggle("open")
}

navToggler.addEventListener("click", toggleNavMenu)
for(let item of navItems) {
  item.addEventListener("click", toggleNavMenu)
}