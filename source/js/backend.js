const ALERT_INTERVAL = 3000;
const DEBOUNCE_INTERVAL = 500;

const ALERT_TEXT = 'Не удалось отправить форму, попробуйте позднее.';
const UPLOAD_URL = 'https://60376bfd5435040017722533.mockapi.io/form';

const form = document.querySelector('.form');

// устраняет "дребезг"

const setDebounce = function (cb) {
  let lastTimeout = null;

  return function () {
    const parameters = arguments;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      cb.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};

// создает алерт елемент

const createAlertElement = setDebounce(function () {
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

// отправляет данные формы на сервер

const onFormSubmit = function (evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch(
    UPLOAD_URL,
    {
      method: 'POST',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      form.reset();
    } else {
      createAlertElement();
    }
  }).catch(() => {
    createAlertElement();
  })
}

form.addEventListener('submit', onFormSubmit);
