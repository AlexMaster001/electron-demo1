const form = document.querySelector('.feedback-form');


const createUser = async (e) => {
  e.preventDefault();
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const age = form.querySelector('input[name="age"]').value;
  const phone = form.querySelector('input[name="phone"]').value;
  const newUser = `3, ${name}, ${age}, ${phone}, ${email}`;
  console.log(newUser);
  await window.myAPI.writeCSV(newUser);
}

form.addEventListener('submit', createUser);
