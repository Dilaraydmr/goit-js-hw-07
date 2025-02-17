const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  console.log(event.target.email.value);
  console.log(event.target.password.value);
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (email === `` || password === ``) {
    alert(`All form fields must be filled in`);
  }
  console.log(email, password);
  event.target.reset();
});
