const formInputRef = document.querySelector('#validation-input');
const formInputRefLength = formInputRef.getAttribute('data-length');
const lengthCheck = event => {
  if (event.currentTarget.value.length === Number(formInputRefLength)) {
    formInputRef.classList.add('valid');
    formInputRef.classList.remove('invalid');
  } else {
    formInputRef.classList.remove('valid');
    formInputRef.classList.add('invalid');
  }
};
formInputRef.addEventListener('blur', lengthCheck);
