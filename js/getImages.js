import data from "../data/images.json" assert { type: "json" }

window.addEventListener("load", () => {
  const gallery = document.querySelector(".gallery .row")
  gallery.innerHTML = ""
  if (data.images.length) {
    for (let image of data.images) {
      gallery.innerHTML += `
      <div class="col col-lg-4 col-md-6">
        <a href="${image.url}" data-lity>
          <div class="image__wrapper" style="background-image: url(${image.url})"></div>
        </a>
      </div>
      `
    }
  } else {
    gallery.innerHTML = "<h2 style='width: 100%'>¯\\_(ツ)_/¯</h2>"
  }
})
