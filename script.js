let div = document.querySelector('.some')

// // // вывод свойств элемента в консоль
// // console.dir(div) 

// // заменили содержимое элемента
// div.innerHTML = 'replaced <div>text</div>'

// // переопредилили цвет содержимого элемента
// div.style.color = 'red'

// // использование метода добавления нового дочернего элемента к текущему элементу
// let p = div.appendChild(document.createElement('p'))
// p.innerText = 'добавленный абзац'

// подписываемся на событие нажатия кнопки
// ДЗ: скрываем/показываем div по нажанию
let btn = document.querySelector('button')
btn.onclick = function () {
    // div.classList.add('active')
    // div.style.color = 'green'
    // div.innerHTML = 'an event occurred'
    
    // if (div.classList.contains('hidden_div')){
    //     div.classList.remove('hidden_div')
    //     div.classList.add('visible_div')
    // }else{
        
    //     div.classList.remove('visible_div')
    //     div.classList.add('hidden_div')
    // }

    div.classList.toggle('hidden_div');
}