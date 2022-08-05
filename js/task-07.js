const fontSize = document.querySelector("#font-size-control");
const abracadabra = document.querySelector("#text");

fontSize.addEventListener("input", () => {
  abracadabra.style.fontSize = `${fontSize.value}px`;
});
