/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validation_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_js__ = __webpack_require__(2);



const UPLOAD_URL = 'https://60376bfd5435040017722533.mockapi.io/form';
const form = document.querySelector('.form');

Object(__WEBPACK_IMPORTED_MODULE_0__validation_js__["a" /* addValidationListeners */])();

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
      Object(__WEBPACK_IMPORTED_MODULE_1__alert_js__["a" /* createAlertElement */])();
    }
  }).catch(() => {
    Object(__WEBPACK_IMPORTED_MODULE_1__alert_js__["a" /* createAlertElement */])();
  });
};

form.addEventListener('submit', onFormSubmit);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    inputElement.setCustomValidity(warn);
  } else {
    inputElement.setCustomValidity('');
  }
};

const onNameInput = function () {
  checkInputValidity(inputName, NAME_PATTERN, NAME_WARN);
};

const onPhoneInput = function () {
  checkInputValidity(inputPhone, PHONE_PATTERN, PHONE_WARN);
};

const onEmailInput = function () {
  checkInputValidity(inputEmail, EMAIL_PATTERN, EMAIL_WARN);
};

const addValidationListeners = function () {
  inputName.addEventListener('input', onNameInput);
  inputPhone.addEventListener('input', onPhoneInput);
  inputEmail.addEventListener('input', onEmailInput);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = addValidationListeners;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debounce_js__ = __webpack_require__(3);


const ALERT_INTERVAL = 3000;
const ALERT_TEXT = 'Не удалось отправить форму, попробуйте позднее.';

const form = document.querySelector('.form');

// создает алерт елемент

const createAlertElement = Object(__WEBPACK_IMPORTED_MODULE_0__debounce_js__["a" /* setDebounce */])(function () {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = createAlertElement;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DEBOUNCE_INTERVAL = 500;

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
/* harmony export (immutable) */ __webpack_exports__["a"] = setDebounce;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map