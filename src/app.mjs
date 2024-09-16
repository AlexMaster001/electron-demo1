import users from "./db.mjs"

const table = document.querySelector('.table');

const createRow = (userData) => {
  const tr = document.createElement('tr');
  const { name, email, age, phone } = userData;
  [name, email, age, phone].forEach((data) => {
    const td = document.createElement('td');
    td.textContent = data;
    tr.appendChild(td);
  })
  table.appendChild(tr);
  return tr;
}

const renderTable = () => {
  const fragment = document.createDocumentFragment(); // оптимизируем работу с DOM, вставляя элементы единожды, а не на каждой итерации

  users.forEach((user) => {
    fragment.appendChild(createRow(user));
  });
  table.appendChild(fragment);
}

renderTable();
