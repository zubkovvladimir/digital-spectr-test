import {setDebounce} from './debounce.js';

const ALERT_INTERVAL = 3000;
const ALERT_TEXT = 'Не удалось отправить форму, попробуйте позднее.';

const form = document.querySelector('.form');

// создает алерт елемент

export const createAlertElement = setDebounce(function () {
  const alert = document.createElement('p');

  alert.textContent = ALERT_TEXT;
  alert.style.marginBottom = 0;
  alert.style.color = 'red';
  alert.style.position = 'absolute';
  alert.style.top = '343px';
  alert.style.left = '43px';

  form.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_INTERVAL);
});
