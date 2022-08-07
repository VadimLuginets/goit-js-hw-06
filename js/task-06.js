const input = document.querySelector("#validation-input");
const checker = document.querySelector("[data-length]");
const numberToCheck = Number(checker.dataset.length);
input.addEventListener("blur", () => {
  if (input.value.length === numberToCheck) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
