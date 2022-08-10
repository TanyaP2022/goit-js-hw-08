import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  formData.email = inputEl.value;
  formData.message = messageEl.value;
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

fillForm();

function fillForm() {
  const rawValues = localStorage.getItem(STORAGE_KEY);
  const valuesObject = JSON.parse(rawValues);

  if (valuesObject) {
    const savedEmail = valuesObject.email;
    inputEl.value = savedEmail;

    const savedMessage = valuesObject.message;
    messageEl.value = savedMessage;
  }
}
