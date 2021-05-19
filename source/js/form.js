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
