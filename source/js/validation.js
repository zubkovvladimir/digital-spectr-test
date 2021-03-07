const NAME_PATTERN = /[^-а-яА-Я ]/g;
const PHONE_PATTERN = /[^-0-9 +]/g;
const EMAIL_PATTERN = /[^a-zA-z]+@[^a-zA-z]+.[^a-zA-z]+/g;

const NAME_WARN = 'Пожалуйста, используйте только русские буквы, пробелы и тире.';
const PHONE_WARN = 'Пожалуйста, используйте только цифры, знаки "-" и "+" и пробелы.';
const EMAIL_WARN = 'Пожалуйста, введите корреткный email.';

const inputName = document.querySelector('.form__input--name');
const inputPhone = document.querySelector('.form__input--phone');
const inputEmail = document.querySelector('.form__input--email');

// валидирует инпуты

const checkInputValidity = function (inputElement, pattern, warn) {
  const value = inputElement.value;

  if (value.match(pattern)) {
    inputElement.setCustomValidity(warn)
  } else {
    inputElement.setCustomValidity('')
  }
}

const onNameInput = function () {
  checkInputValidity(inputName, NAME_PATTERN, NAME_WARN);
}

const onPhoneInput = function () {
  checkInputValidity(inputPhone, PHONE_PATTERN, PHONE_WARN);
}

const onEmailInput = function () {
  checkInputValidity(inputEmail, EMAIL_PATTERN, EMAIL_WARN);
}


inputName.addEventListener('input', onNameInput);
inputPhone.addEventListener('input', onPhoneInput);
inputEmail.addEventListener('input', onEmailInput);
