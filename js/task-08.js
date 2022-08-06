const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  if (mail.length === 0) {
    alert("All fields must be filed");
  }
  if (password.length === 0) {
    alert("All fields must be filed");
  }
  console.log(mail);
  console.log(password);
});
