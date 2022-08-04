const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const arrayOfLi = ingredients.map((ingredient) => {
  const generatedLi = document.createElement("li");
  generatedLi.classList.add("item");
  generatedLi.textContent = ingredient;
  return generatedLi;
});
list.append(...arrayOfLi);
