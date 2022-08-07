const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("keyup", () => {
  if (nameInput.value.length === 0) {
    nameOutput.textContent = "Anonymous";
  } else {
    const inputField = nameInput.value;
    nameOutput.textContent = inputField;
  }
});
