const form = document.querySelector('.feedback-form');

const createUser = async (e) => {
  e.preventDefault();
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const age = form.querySelector('input[name="age"]');
  const phone = form.querySelector('input[name="phone"]');
  const newUser = `3, ${name}, ${age}, ${phone}, ${email}`;
  await window.myAPI.writeCSV();
}

form.addEventListener('submit', createUser);



