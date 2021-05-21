const open = document.querySelector('.header__toggle');
const navigation = document.querySelector('.header__nav');
const close = document.querySelector('.header__toggle--close');

function ready() {
  console.log('Закрывает меню при подключении скрипт файла');
  navigation.classList.remove('header__nav--show');
  open.classList.remove('visually-hidden');
}

document.addEventListener("DOMContentLoaded", ready);

open.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик - Открывает меню');
  navigation.classList.add('header__nav--show');
  open.classList.add('visually-hidden');
  close.classList.remove('visually-hidden');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик - закрывает меню');
  navigation.classList.remove('header__nav--show');
  close.classList.add('visually-hidden');
  open.classList.remove('visually-hidden');
})

//отрботка состояния полей ввода
const catName = document.querySelector('.cat__area--control-name');
const catWeight = document.querySelector('.cat__area--control-weight');
const contactMail = document.querySelector('.contact__area--mail');
const contactPhone = document.querySelector('.contact__area--phone');
const mailSvg = document.querySelector('.contact__svg--mail');
const phoneSvg = document.querySelector('.contact__svg--phone');
const send = document.querySelector('.button--form');
var validMiil = true;
var validPhone = true;

const validateFormCat = (i) => {

  if (i.value === '') {
    i.classList.add('cat__area--error');
  }
}

const validateFormContactMail = (i) => {
  if (i.value === '') {
    i.classList.add('contact__area--error');
    validMiil = false;
  }
}

const validateFormContactPhone = (i) => {
  if (i.value === '') {
    i.classList.add('contact__area--error');
    validPhone = false;
  }
}

const validatePhoneSvg = (i) => {

  if (validPhone === false) {
    i.classList.add('contact__area--phone-svg-error');
  }
}

const validateMailSvg = (i) => {

  if (validMiil === false) {
    i.classList.add('contact__area--mail-svg-error');
  }
}

send.addEventListener('click', function (evt) {
  console.log('Отправка формы');
  validateFormCat(catName);
  validateFormCat(catWeight);
  validateFormContactMail(contactMail);
  validateFormContactPhone(contactPhone);
  validateMailSvg(mailSvg);
  validatePhoneSvg(phoneSvg);
});
