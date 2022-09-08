const formRef = document.querySelector('.login-form');
const submitHandler = event => {
  event.preventDefault();
  if (event.target.elements.email.value === '' || event.target.elements.password.value === '') {
    alert('Заповніть, будь ласка, усі поля!');
  }
  const userObject = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  };
  console.log(userObject);
  event.currentTarget.reset();
};
formRef.addEventListener('submit', submitHandler);
