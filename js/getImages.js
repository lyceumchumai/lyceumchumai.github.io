import data from "../data/images.json" assert { type: "json" };

const gallery = document.querySelector(".gallery .row")
gallery.innerHTML = ""
console.log(data)
for(let image of data.images) {
  gallery.innerHTML += `
  <div class="col col-md-4">
    <div class="image__wrapper" style="background-image: url(${image.url})"></div>
  </div>
  `
}
