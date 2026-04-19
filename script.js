
window.addEventListener('load', pageLoaded);

function pageLoaded() {
    // let list = document.querySelector('.list'); // элемент <ul>
    let list = document.querySelectorAll('.list li'); // коллекция элементов <li>

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

    let asks = document.querySelectorAll('.faq .ask');
    for (let ask of asks) {
        ask.addEventListener('click', toggleAnswer);
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
    console.log(this.nextElementSibling);  // а это уже вернет следующий элемент дерева DOM, игнорируя текстовые узлы
    // но все эти попытки ломаются, как только меняется html-разметка

    // самый надежный
    console.log(this.parentNode.querySelector('.answer'));
    // но тут тож есть проблема: 
    //         если, вдруг, div ask окажется обернутым другим элеентом, все сломается
    // Для рещения этой проблемы есть функция, котораю идет по дереву DOM вверх, 
    // и ищет элемент нужного класса
    console.log(this.closest('.item')); // найдем родительский div item
    // и затем в нем найдем по классу answer
    console.log(this.closest('.item').querySelector('.answer')); // BINGO !!!

    this.closest('.item').querySelector('.answer').classList.toggle('hide');
}

// ДЗ: Сделать "аккордеон" - когда открывается 1 элемент, закрываются остальные,
//  если кликают по открытому, то ничего не происходит