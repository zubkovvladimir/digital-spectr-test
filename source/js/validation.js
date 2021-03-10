const NAME_PATTERN = /[^-а-яА-Я ]/g;
const PHONE_PATTERN = /[^-0-9 +]/g;
const EMAIL_PATTERN = /[^a-zA-z]+@[^a-zA-z]+.[^a-zA-z]+/g;

const NAME_TEXT = 'Пожалуйста, используйте только русские буквы, пробелы и тире.';
const PHONE_TEXT = 'Пожалуйста, используйте только цифры, знаки "-" и "+" и пробелы.';
const EMAIL_TEXT = 'Пожалуйста, введите корреткный email.';

const inputName = document.querySelector('.form__input--name');
const inputPhone = document.querySelector('.form__input--phone');
const inputEmail = document.querySelector('.form__input--email');

const warnMap = {
  name: {
    text: NAME_TEXT,
    pattern: NAME_PATTERN
  },
  phone: {
    text: PHONE_TEXT,
    pattern: PHONE_PATTERN
  },
  email: {
    text: EMAIL_TEXT,
    pattern: EMAIL_PATTERN
  }
};

// валидирует инпуты

const checkInputValidity = function (inputElement, pattern, warn) {
  const value = inputElement.value;

  if (value.match(pattern)) {
    inputElement.setCustomValidity(warn);
  } else {
    inputElement.setCustomValidity('');
  }
};

const onNameInput = function () {
  checkInputValidity(inputName, warnMap.name.pattern, warnMap.name.text);
};

const onPhoneInput = function () {
  checkInputValidity(inputPhone, warnMap.phone.pattern, warnMap.phone.text);
};

const onEmailInput = function () {
  checkInputValidity(inputEmail, warnMap.email.pattern, warnMap.email.text);
};

export const addValidationListeners = function () {
  inputName.addEventListener('input', onNameInput);
  inputPhone.addEventListener('input', onPhoneInput);
  inputEmail.addEventListener('input', onEmailInput);
};
