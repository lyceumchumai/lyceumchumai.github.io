import data from "../data/news.json" assert { type: "json" }

const news = document.querySelector(".news .row")
news.innerHTML = ""
if(data.news.length) {
  for (let item of data.news) {
    news.innerHTML += `
    <div class="col col-lg-4">
      <div class="news__item" style="background-image: url(${item.background})">
        <div class="news__item__content">
          <div class="news__item-back">
          </div>
          <h2 class="news__item-title">${item.title}</h2>
          <i class="news__item-date">${item.date}</i>
          <div class="news__item-description">${item.description}</div>
        </div>
      </div>
    </div>
    `
  }
} else {
  news.innerHTML = "<h2 style='width: 100%'>¯\\_(ツ)_/¯</h2>"
}
