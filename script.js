
// #1
// window.onload = function(){
//     let div = document.querySelector('.some');
//     div.innerHTML = '1';
// }

// #2
// function pageLoaded() {
//     let div = document.querySelector('.some');
//     div.innerHTML = '1';
// }
// window.onload = pageLoaded;

// #3
// window.addEventListener('load', function(){
//     let div = document.querySelector('.some');
//     div.innerHTML = '111';
// })

//4
// function pageLoaded() {
//     let div = document.querySelector('.some');
//     div.innerHTML = '111';
// }
// window.addEventListener('load', pageLoaded);

// ДЗ
// 1. переписать Дз прошлого урока в канонический вариант
// 2. создать в html тэг input, 
//    подипсаться на событие ввода данных в input
//    и выводить их в консоль. 
//    И еще кнопку очистки input

function btnClick() {
    let div = document.querySelector('.some')
    div.classList.toggle('hidden_div');

    let inp = document.querySelector('.inp');
    inp.value = "";
}

function pageLoaded() {
    let btn = document.querySelector('button');
    btn.addEventListener('click', btnClick);

    let inp = document.querySelector('.inp');
    console.log(inp);
    inp.addEventListener('input', function (e) {
        console.log(inp.value);
        console.log(this.value);
        console.log(e.target.value);
    });

}

window.addEventListener('load', pageLoaded);

/*
let btn = document.querySelector('button')
btn.onclick = function () {
    // div.classList.add('active')
    // div.style.color = 'green'
    // div.innerHTML = 'an event occurred'
    
    if (div.classList.contains('hidden_div')){
        div.classList.remove('hidden_div')
        div.classList.add('visible_div')
    }else{
        
        div.classList.remove('visible_div')
        div.classList.add('hidden_div')
    }

}
*/