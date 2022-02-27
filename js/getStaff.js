import data from "../dist/staff.json" assert { type: "json" };

const table = document.querySelector(".staff-table")
table.innerHTML = ""

for(let item of data.staff) {
  table.innerHTML += `
    <tr>
      <td>${item.name}</td>
      <td>${item.lesson}</td>
    </tr>
  `
}