window.addEventListener("load", pageLoaded);

function pageLoaded() {
  // let list = document.querySelector('.list'); // элемент <ul>
  let list = document.querySelectorAll(".list li"); // коллекция элементов <li>

  // как работать с такой коллекцией
  /*
    // Обычный цикл
    for (let i = 0; i < list.length; i++) {
        console.dir(list[i]);
    }
    */

  /*
    // // цикл foreach требует call back, которые ще не проходили, поэтому потом
    list.foreach(...);
    */

  /*
    // вспомним, что объекты в js, это ассоциативный массив (маппа),
    // где ключи, это наименование свойств.
    // цикл for in вернет, кроме индексов элементов, еще доп ключи-свойства
    for (let key in list) {
        console.log(key);
    }
    */

  /*
    // цикл for of перебирает итерируемые сущности
    // по сути, как раз элементы нашей коллекции
    for (let el of list) {
        el.addEventListener('mouseenter', setElemAsActive);
    }*/

  let asks = document.querySelectorAll(".faq .ask");
  for (let ask of asks) {
    // ask.addEventListener("click", toggleAnswer);

    ask.addEventListener("click", clickAsk);
  }
}

/*
function setElemAsActive() {
    // console.log(this.dataset);
    this.style.color = this.dataset.color;
}
*/

function toggleAnswer() {
  console.log(this); // элемент, в контексте которого событие
  console.log(this.parentNode); // родительский элемент

  // попробуем найти нужный элемент answer
  console.log(this.parentNode.children[1]); // первый элемент в родительском
  console.log(this.nextSibling); // в данном случае вернет переход строки - элемент между двума элементами div
  console.log(this.nextElementSibling); // а это уже вернет следующий элемент дерева DOM, игнорируя текстовые узлы
  // но все эти попытки ломаются, как только меняется html-разметка

  // самый надежный
  console.log(this.parentNode.querySelector(".answer"));
  // но тут тож есть проблема:
  //         если, вдруг, div ask окажется обернутым другим элеентом, все сломается
  // Для рещения этой проблемы есть функция, котораю идет по дереву DOM вверх,
  // и ищет элемент нужного класса
  console.log(this.closest(".item")); // найдем родительский div item
  // и затем в нем найдем по классу answer
  console.log(this.closest(".item").querySelector(".answer")); // BINGO !!!

  // из всего вышесказанного
  // в div 2 элемента разных классов
  // по клику на одно элементе, надо найти другой элемент
  // наилучший вариант использовать closest('.item')
  // closest('.item') - ищет в дереве DOM вверх, пока не найдет элемент нужного класса
  // и затем в нем найдем по классу нужный нам
  // this.closest(".item").querySelector(".answer").classList.toggle("hide");
}

// ДЗ: Сделать "аккордеон" - когда открывается 1 элемент, закрываются остальные,
//  если кликают по открытому, то ничего не происходит
function clickAsk() {
  let ans = this.closest(".item").querySelector(".answer");
  if (ans == null) return;

  console.log(ans);
  // ans.classList.toggle("hide");
  //
  console.log(ans.classList.contains("hide"));

  if (!ans.classList.contains("hide")) {
    return;
  }

  let otherAns = this.closest(".item")
    .closest(".faq")
    .querySelectorAll(".answer");
  console.log(otherAns);
  for (let a of otherAns) {
    a.classList.add("hide");
  }

  ans.classList.remove("hide");
}

function clickAskTeacher() {
  const item = this.closest(".item");
  const answer = item.closest(".answer");

  if (!answer.classList.contains("hide")) return;

  const answeToCloseList = item
    .closest(".faq")
    .querySelectorAll(".answer:not(.hide)");
  for (let a of answeToCloseList) {
    a.classList.add("hide");
  }

  answer.classList.remove("hide");
}
