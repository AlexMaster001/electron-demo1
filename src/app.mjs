import { users } from "./db.mjs"

const usersTable = document.querySelector('.table');

const createRow = (userData) => {
  const tr = document.createElement('tr');
  const { name, email, age, phone } = userData;
  [name, email, age, phone].forEach((data) => {
    const td = document.createElement('td');
    td.textContent = data;
    tr.appendChild(td);
  })
  usersTable.appendChild(tr);
  return tr;
}

const renderTable = (table) => {
  const fragment = document.createDocumentFragment(); // оптимизируем работу с DOM, вставляя элементы единожды, а не на каждой итерации

  users.forEach((user) => {
    fragment.appendChild(createRow(user));
  });
  table.appendChild(fragment);
}

renderTable(usersTable);

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`

const setButton = document.getElementById('btn')
setButton.addEventListener('click', () => {
  const table = 'goods'
  window.electronAPI.openNewTable(table)
})
