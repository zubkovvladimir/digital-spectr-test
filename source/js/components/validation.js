const NAME_PATTERN = /[^-а-яА-Я ]/g;
const PHONE_PATTERN = /[^-0-9 +]/g;
const EMAIL_PATTERN = /[^a-zA-z]+@[^a-zA-z]+.[^a-zA-z]+/g;

const NAME_TEXT = 'Пожалуйста, используйте только русские буквы, пробелы и тире.';
const PHONE_TEXT = 'Пожалуйста, используйте только цифры, знаки "-" и "+" и пробелы.';
const EMAIL_TEXT = 'Пожалуйста, введите корреткный email.';

const form = document.querySelector('.form');

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

const onFormChange = function (evt) {
  const target = evt.target;
  const name = target.name;
  const value = target.value;

  const isInvalid = value.match(warnMap[name].pattern);

  if (isInvalid) {
    target.setCustomValidity(warnMap[name].text);
  } else {
    target.setCustomValidity('');
  }
};

export const addValidationListener = function () {
  form.addEventListener('change', onFormChange);
};
