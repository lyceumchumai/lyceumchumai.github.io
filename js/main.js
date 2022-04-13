import Scroller from "../dist/scroller-es6.min.js"

const navToggler = document.querySelector(".nav-toggler")
const navList = document.querySelector(".nav ul")
const navItems = navList.querySelectorAll("li")
const logoWrapper = document.querySelector(".navbar-brand__wrapper")

if (window.localStorage.getItem("theme")) {
  if (window.localStorage.getItem("theme") == "light") {
    document.body.classList.add("theme-light")
    document.body.classList.remove("theme-dark")
  }
  if (window.localStorage.getItem("theme") == "dark") {
    document.body.classList.add("theme-dark")
    document.body.classList.remove("theme-light")
  }
} else {
  window.localStorage.setItem("theme", "light")
}

const toggleNavMenu = () => {
  navToggler.classList.toggle("fa-bars")
  navToggler.classList.toggle("fa-xmark")
  navList.classList.toggle("open")
}

const toggleTheme = () => {
  document.body.classList.toggle("theme-dark")
  document.body.classList.toggle("theme-light")
  if (window.localStorage.getItem("theme") == "dark") {
    window.localStorage.setItem("theme", "light")
  } else
  if (window.localStorage.getItem("theme") == "light") {
    window.localStorage.setItem("theme", "dark")
  } 
}

navToggler.addEventListener("click", toggleNavMenu)
for (let item of navItems) {
  item.addEventListener("click", toggleNavMenu)
}
logoWrapper.addEventListener("click", toggleTheme)

new Scroller({
  btnSelector: ".scroll-to",
  btnAttr: "data-scroll",
  btnPreventDefault: true,
})
