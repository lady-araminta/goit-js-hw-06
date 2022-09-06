const formInputRef = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

formInputRef.addEventListener('input', userEnterName);

function userEnterName(event) {
  if (formInputRef.value === '') {
    nameLabel.textContent = 'Anonymous';
  } else {
    nameLabel.textContent = event.currentTarget.value;
  }
}
