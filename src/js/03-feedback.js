import throttle from 'lodash.throttle';
const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('.feedback-form input'),
  messageEl: document.querySelector('.feedback-form textarea'),
  submitEl: document.querySelector('.feedback-form button'),
};
console.log(refs.submitEl);
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

const checkingLocalstorage = function () {
  const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (formData === null) {
    return;
  }
  (refs.emailEl.value = formData.email), (refs.messageEl.value = formData.message);
};
checkingLocalstorage();
// ---------------------------------------------------------
refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);
// --------------------------------------------------------
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.emailEl.value === '' || refs.messageEl.value === '') {
    return;
  }
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
