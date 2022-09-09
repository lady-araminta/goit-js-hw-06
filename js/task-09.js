const bodyRef = document.querySelector('body');
const colorDescrRef = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getColorChange() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorDescrRef.textContent = bodyRef.style.backgroundColor;
}

colorChangeBtn.addEventListener('click', getColorChange);
