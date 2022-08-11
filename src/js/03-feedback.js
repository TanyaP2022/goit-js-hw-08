import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

inputEl.addEventListener('input', throttle(onTextareaInput, 500));
messageEl.addEventListener('input', throttle(onTextareaInput, 500));

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(formEl);
  formEl.forEach((name, value) => {
    console.log(name, value);
  });
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const email = inputEl.value;
  const message = messageEl.value;
  const formData = {
    email,
    message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

formEl.addEventListener('input', even => {
  formData[even.target.name] = even.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
populateTextarea();

function populateTextarea() {
  const valuesObject = localStorage.getItem(STORAGE_KEY);
  valuesObject = JSON.parse(valuesObject);

  if (valuesObject) {
    inputEl.value = valuesObject.email;
    messageEl.value = valuesObject.message;
  }
}
