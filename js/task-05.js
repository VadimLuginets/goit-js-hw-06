const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("keyup", () => {
  const inputField = nameInput.value;
  nameOutput.textContent = inputField;
});
