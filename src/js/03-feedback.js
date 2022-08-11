import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

emailEl.addEventListener('input', throttle(onInputChange, 500));
messageEl.addEventListener('input', throttle(onInputChange, 500));

newInput();

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(formEl);
  formData.forEach((name, value) => {
    console.log(name, value);
  });

  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
});

function onInputChange(e) {
  const email = emailEl.value;
  const message = messageEl.value;
  const formData = {
    email,
    message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function newInput() {
  let inputSaved = localStorage.getItem(STORAGE_KEY);
  inputSaved = JSON.parse(inputSaved);

  if (inputSaved) {
    emailEl.value = inputSaved.email;
    messageEl.value = inputSaved.message;
  }
}
