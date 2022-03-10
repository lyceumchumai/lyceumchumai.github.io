import Scroller from "../dist/scroller-es6.min.js"

const navToggler = document.querySelector(".nav-toggler")
const navList = document.querySelector(".nav ul")
const navItems = navList.querySelectorAll("li")

const toggleNavMenu = () => {
  navToggler.classList.toggle("fa-bars")
  navToggler.classList.toggle("fa-xmark")
  navList.classList.toggle("open")
}

navToggler.addEventListener("click", toggleNavMenu)
for (let item of navItems) {
  item.addEventListener("click", toggleNavMenu)
}

new Scroller({
  btnSelector: ".scroll-to",
  btnAttr: "data-scroll",
  btnPreventDefault: true,
})