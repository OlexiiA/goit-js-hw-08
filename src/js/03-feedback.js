import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(valueForm, 500));
form.addEventListener("submit", onSubmit);

let object = {};
inputValues();
function inputValues(event) {
  if (!localStorage.getItem(STORAGE_KEY)) {
    return;
  }
  object = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (object.email) {
    form[0].value = object.email;
  }
  if (object.message) {
    form[1].value = object.message;
  }
}

function valueForm(event) {
  object[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(object));
}

function onSubmit(event) {
  event.preventDefault();
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  object = {};
}


