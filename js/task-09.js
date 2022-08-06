function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const colorToChange = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  colorToChange.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorToChange.textContent;
});
