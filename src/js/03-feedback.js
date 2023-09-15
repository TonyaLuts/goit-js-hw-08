import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onClickButtonForm);
refs.form.addEventListener('input', throttle(onInputDataForm, 500));

populateFeedbackFromLocalStorage();

function onInputDataForm(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFeedbackFromLocalStorage() {
  if (formData) {
    refs.form.elements.email.value = formData.email || '';
    refs.form.elements.message.value = formData.message || '';
  }
}

function onClickButtonForm(event) {
  event.preventDefault();

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
