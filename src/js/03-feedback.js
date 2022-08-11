import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
inputEl.addEventListener('input', throttle(onTextareaInput, 500));
messageEl.addEventListener('input', throttle(onTextareaInput, 500));
fillForm();
formEl.addEventListener('input', even => {
  formData[even.target.name] = even.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  const formData = {};
  // formEl.reset();
  formData.email = inputEl.value;
  formData.message = messageEl.value;
  event.target.reset();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const message = messageEl.target.value;
  const email = inputEl.target.value;
  localStorage.setItem(STORAGE_KEY, message);
  localStorage.setItem(STORAGE_KEY, email);
}

function populateTextarea() {
  const valuesObject = localStorage.getItem(STORAGE_KEY);
  // valuesObject = JSON.parse(valuesObject);

  if (valuesObject) {
    inputEl.value = valuesObject.email;

    messageEl.value = valuesObject.message;
  }
}
