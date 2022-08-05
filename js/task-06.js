const input = document.querySelector("#validation-input");
const checker = document.querySelector("[data-length]");
console.log(checker.dataset.length);
input.addEventListener("blur", () => {
  if (input.value.length == checker.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
