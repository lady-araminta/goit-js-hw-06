const inputFzControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = inputFzControlRef.value + 'px';
inputFzControlRef.addEventListener('input', inputChangeHandler);
function inputChangeHandler(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
