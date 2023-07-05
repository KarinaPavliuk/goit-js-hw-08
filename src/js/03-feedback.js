import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const lastInput = JSON.parse(localStorage.getItem('feedback-form-state'));

formEl.addEventListener(
  'input',
  throttle(event => {
    console.log('input');
    const email = formEl.elements.email.value;
    const message = formEl.elements.message.value;
    const json = JSON.stringify({
      email,
      message,
    });

    localStorage.setItem('feedback-form-state', json);
  }, 500)
);

if (lastInput) {
  formEl.email.value = lastInput.email || '';
  formEl.message.value = lastInput.message || '';
}

formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (formEl.email.value === '' || formEl.message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem('feedback-form-state');
  console.log({
    email: formEl.email.value,
    message: formEl.message.value,
  });
  formEl.email.value = '';
  formEl.message.value = '';
});
