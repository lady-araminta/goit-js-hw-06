const formInputRef = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

formInputRef.addEventListener('input', userEnterName);

function userEnterName(event) {
  formInputRef.value === ''
    ? (nameLabel.textContent = 'Anonymous')
    : (nameLabel.textContent = event.currentTarget.value);
}
