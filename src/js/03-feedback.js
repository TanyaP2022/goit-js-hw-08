import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const emailEl = document.querySelector('email');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

formEl.addEventListener('submit', onFormSubmit);
// formEl.addEventListener('input', throttle(onTextareaInput, 500));
messageEl.addEventListener('input', throttle(onTextareaInput, 500));
// fillForm();
formEl.addEventListener('input', even => {
  formData[even.target.name] = even.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  // formData.email = inputEl.value;
  // formData.message = messageEl.value;
  // console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
  // formData[event.target.name] = event.target.value;
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
// function fillForm() {

function populateTextarea() {
  const valuesObject = localStorage.getItem(STORAGE_KEY);
  // const valuesObject = JSON.parse(rawValues);

  if (valuesObject) {
    const savedEmail = valuesObject.email;
    inputEl.value = savedEmail;

    const savedMessage = valuesObject.message;
    messageEl.value = savedMessage;
  }
}
