import users from "./db.mjs"

const createRow = (userData) => {
  const table = document.querySelector('.table');
  const tr = document.createElement('tr');
  const { name, email, age, phone } = userData;
  [name, email, age, phone].forEach((data) => {
    const td = document.createElement('td');
    td.textContent = data;
    tr.appendChild(td);
  })
  table.appendChild(tr)
}

users.forEach((user) => createRow(user));
