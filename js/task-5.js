function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorButton = document.querySelector(`.change-color`);
colorButton.addEventListener(`click`, (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
});
