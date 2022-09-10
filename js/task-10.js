function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elemContainerRef = document.querySelector('#boxes');
const formInputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');

function inputValue(value) {
  return event.currentTarget.value;
}

formInputRef.addEventListener('input', inputValue);

function createBoxes() {
  for (let i = 0; i < formInputRef.value; i += 1) {
    const create = `<div style = "background-color: ${getRandomHexColor()};
      width: ${30 + i * 10}px;
      height: ${30 + i * 10}px"></div>`;
    elemContainerRef.insertAdjacentHTML('beforeend', create);
  }
}

createBtnRef.addEventListener('click', createBoxes);

function destroyBoxes() {
  elemContainerRef.innerHTML = '';
}

destroyBtnRef.addEventListener('click', destroyBoxes);
