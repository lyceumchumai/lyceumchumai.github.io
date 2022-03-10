import data from "../data/events.json" assert { type: "json" }

const events = document.querySelector(".events .row")
events.innerHTML = ""
for (let event of data.events) {
  events.innerHTML += `
  <div class="col col-md-4">
    <div class="event" style="background-image: url(${event.background})">
      <div class="event__content">
        <h2 class="event-title">${event.title}</h2>
        <div class="event-description">${event.description}</div>
      </div>
    </div>
  </div>
  `
}
