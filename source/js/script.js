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
