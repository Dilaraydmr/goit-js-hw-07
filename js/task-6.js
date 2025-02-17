function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector(`#controls input`);
const createBtn = document.querySelector(`#controls button[data-create]`);
const destroyBtn = document.querySelector(`#controls button[data-destroy]`);
const boxes = document.querySelector(`#boxes`);
let box = {
  width: 30,
  height: 30,
};
createBtn.addEventListener(`click`, (event) => {
  boxes.innerHTML = ``;
  const inputValue = input.value;
  box = {
    width: 30,
    height: 30,
  };
  for (let i = 0; i < inputValue; i += 1) {
    const divBox = document.createElement(`div`);
    divBox.style.width = `${box.width}px`;
    divBox.style.height = `${box.height}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(divBox);
    box.width += 10;
    box.height += 10;
  }
});
