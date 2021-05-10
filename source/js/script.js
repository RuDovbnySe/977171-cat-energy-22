const open = document.querySelector('.header__toggle');
const navigation = document.querySelector('.header__nav');
const close = document.querySelector('.header__toggle--close');


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






//
// var write = document.querySelector(".contacts-btn");
// var letter = document.querySelector(".letter");
// var close = document.querySelector(".js-close");
//
//
// write.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   console.log("Клик - Напишите нам");
//   letter.classList.add("letter-show");
// });
//
// close.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   console.log("Клик - закрыть");
//   letter.classList.remove("letter-show");
// })
