import { addValidationListener } from './validation.js';
import { createAlertElement } from './alert.js';

const UPLOAD_URL = 'https://60376bfd5435040017722533.mockapi.io/form';
const form = document.querySelector('.form');

addValidationListener();

// отправляет данные формы на сервер

const onFormSubmit = function (evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch(
    UPLOAD_URL,
    {
      method: 'POST',
      body: formData
    }
  ).then((response) => {
    if (response.ok) {
      form.reset();
    } else {
      createAlertElement();
    }
  }).catch(() => {
    createAlertElement();
  });
};

form.addEventListener('submit', onFormSubmit);
