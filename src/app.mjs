const usersTable = document.querySelector('.table');

const createRow = (user) => {
  // 1 - name, 2 - age, 3 - phone, 4 - email
  const tr = document.createElement('tr');
  const [, name, age, phone, email] = user;
  [name, email, age, phone].forEach((data) => {
    const td = document.createElement('td');
    td.textContent = data;
    tr.appendChild(td);
  })
  usersTable.appendChild(tr);
  return tr;
}

const renderTable = async (table) => {
  const fragment = document.createDocumentFragment(); // оптимизируем работу с DOM, вставляя элементы единожды, а не на каждой итерации
  const users = await window.myAPI.parseCSV()
  users.forEach((user) => {
    fragment.appendChild(createRow(user));
  });
  table.appendChild(fragment);
}

renderTable(usersTable);

const createUserButton = document.querySelector('.createUser')
createUserButton.addEventListener('click', async () => {
  await window.myAPI.openNewTable()
  // await window.myAPI.writeCSV();
  // renderTable(usersTable);
})
