import data from "../data/staff.json" assert { type: "json" }

window.addEventListener("load", () => {
  const table = document.querySelector(".staff-table")
  table.innerHTML = ""

  for (let item of data.staff) {
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.lesson}</td>
      </tr>
    `
  }
})
