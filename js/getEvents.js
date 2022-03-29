import data from "../data/events.json" assert { type: "json" }

const events = document.querySelector(".events .row")
events.innerHTML = ""
if(data.events.length) {
  for (let event of data.events) {
    events.innerHTML += `
    <div class="col col-md-4">
      <div class="event" style="background-image: url(${event.background})">
        <div class="event__content">
          <div class="event-back">
          </div>
          <h2 class="event-title">${event.title}</h2>
          <i class="event-date">${event.date}</i>
          <div class="event-description">${event.description}</div>
        </div>
      </div>
    </div>
    `
  }
} else {
  events.innerHTML = "<h2 style='width: 100%'>¯\\_(ツ)_/¯</h2>"
}
