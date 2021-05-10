const catName = document.querySelector('.cat__form--control-name');
const catWeight = document.querySelector('.cat__form--control-weight');
const catAge = document.querySelector('.cat__form--control-age');
const contactMail = document.querySelector('.contact__form--mail');
const contactPhone = document.querySelector('.contact__form--phone');
const mailSvg = document.querySelector('.contact__form--mail-svg');
const phoneSvg = document.querySelector('.contact__form--phone-svg');
const send = document.querySelector('.button--form');

var validMail = true;

var validPhone = true;

const validateFormCat = (i) => {

  if (i.value === '') {
    i.classList.add('cat__form--error');
  }
}

const validateFormContactMail = (i) => {
  if (i.value === '') {
    i.classList.add('contact__form--error');

    validMail = false;
  }
}

const validateFormContactPhone = (i) => {
  if (i.value === '') {
    i.classList.add('contact__form--error');
    validPhone = false;
  }
}

const validatePhoneSvg = (i) => {

  if (validPhone === false) {
    i.classList.add('contact__form--phone-svg-error');
  }
}

const validateMailSvg = (i) => {
  
  if (validMail === false) {
    i.classList.add('contact__form--mail-svg-error');
  }
}

send.addEventListener('click', function (evt) {
  console.log('Отправка формы');
  validateFormCat(catName);
  validateFormCat(catWeight);
  validateFormCat(catAge);
  validateFormContactMail(contactMail);
  validateFormContactPhone(contactPhone);
  validateMailSvg(mailSvg);
  validatePhoneSvg(phoneSvg);
});
