const form = document.querySelector('.feedback-form');
import { users } from "./db.mjs";

const createUser = (e) => {
  e.preventDefault();
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const age = form.querySelector('input[name="age"]');
  const phone = form.querySelector('input[name="phone"]');
  const newUser = {
    name,
    email,
    age,
    phone
  }
  users.concat(newUser);
  console.log(users);
}

form.addEventListener('submit', createUser);



