const itemList = document.querySelectorAll(".item");
console.log("Number of categories:", itemList.length);
itemList.forEach((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});
