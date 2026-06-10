// window.addEventListener("load", pageLoaded);
// это более правильный, более современный способ регистрации события
// window.load - срабатывает после полной загрузки страницы, включая все картинки и пр.
// document.DOMConteneLoaded - срабатывает после загружки DOM модели
document.addEventListener("DOMContentLoaded", pageLoaded);

let selectedImg = [];
let images =[];

function pageLoaded() {
  // послучим список всех картинок в галлереи
  images = document.querySelectorAll('.gallery img');

  // подпишемся на click на всех картинках
  // для того, чтоб реализовать выделение картинок по одной и с сажатым ctrl
  for (let image of images) {
    image.addEventListener('click', imageClicked);
    image.addEventListener('contextmenu', cancelEvent);
  }

  // реализум функционал, который при каждом клике на ссылке,
  // будет требовать подтверждение перехода
  let links = document.querySelectorAll('.menu a');
  for (let link of links) {
    link.addEventListener('click', confirmClickOnLink);
  }

  let inputSome = document.querySelector('.form input[name=some]');
  //console.log(inputSome);
  inputSome.addEventListener('keydown', inputEvent);


  let btnDelImg = document.querySelector('.deleteImages');
  btnDelImg.addEventListener('click', clickDelete);
}

// обработчик события вызывается с одним параметром,
// который содержит инфо по событию. 
// Причем инфо разное, в зависимости от события
function imageClicked(e) {
  // при зажатом ctrl добавляем к выдкелению очередную картинку
  // если ctrl не зажат, картинки выделяются по одной
  if (e.ctrlKey) {
    this.classList.toggle('active');
  } else {
    let imagesForDeactive = document.querySelectorAll('.gallery img.active');
    for (let img of imagesForDeactive) {
      if (img !== this) {
        img.classList.remove('active');
      }
    }

    this.classList.toggle('active');
  }
}

// preventDefault - отменяет стандартное действие по событию
// например, если подобную функцию повесить на событие 'contextmenu'
// то стандартное контестное меню не будет подниматься
function cancelEvent(e) {
  e.preventDefault();
}

// Обработчик события клика по ссылке, 
// который просит подтверждение перехода по ссылке
// и еслли нет подтверждения, то отменяет стандартную операцию перехода
function confirmClickOnLink(e) {
  if (!confirm('Подтвердите переход на стороний сайт!')) {
    e.preventDefault();
  }
}

function inputEvent(e) {
  console.log(e);
}

// ДЗ: необходимо добавить к картинкам dataset атрибут с идентификатором картинки
// мы хотим выделять картинки и по кнопке "удалить",
//  необходимо удалить выделенные картинки из DOM
function clickDelete(){
  let imagesForDelete = document.querySelectorAll('.gallery img.active');
  for(img of imagesForDelete){
    console.log(img.dataset.id);

    img.remove();
  }
}