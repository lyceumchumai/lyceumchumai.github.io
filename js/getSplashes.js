import data from "../data/splashes.json" assert { type: "json" }
window.addEventListener("load", () => {
  const splash = document.querySelector(".navbar-splash")
  splash.innerHTML = ""
  if (data.splashes.length) {
    let rand = Math.floor(Math.random() * data.splashes.length)
    splash.innerHTML = data.splashes[rand]
  } else {
    splash.innerHTML = "Великий Лицей"
  }
})
