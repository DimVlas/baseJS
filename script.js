// function pageLoaded() {
//     let btnSet = document.querySelector(".btnSet");
//     let btnAdd = document.querySelector(".btnAdd");
//     let colors = [];

//     btnSet.addEventListener('click', function () {
//         let toolTip = document.querySelector('.toolTip');

//         if (colors.length < 1) {
//             console.log('color not found');

//             toolTip.style.visibility = 'visible';
//             return;
//         }

//         toolTip.style.visibility = 'hidden';
//         let color = colors[rand(colors.length)];
//         console.log(color);
//         btnSet.style.color = color;
//     });

//     btnAdd.addEventListener('click', function () {
//         colors.push(`rgb(${rand(256)},${rand(256)},${rand(256)})`);
//         console.log(colors);
//     });
// }

// решение преподавателя
function pageLoaded() {

    let btnSet = document.querySelector(".btnSet");
    let btnAdd = document.querySelector(".btnAdd");
    let toolTip = document.querySelector('.alert');
    let colors = [];

    btnSet.addEventListener('click', function () {

        if (colors.length < 1) {
            toolTip.classList.remove('hide');
            return;
        }

        let color = colors[rand(colors.length)];
        btnSet.style.color = color;
    });

    btnAdd.addEventListener('click', function () {        
        toolTip.classList.add('hide');
        colors.push(`rgb(${rand(256)},${rand(256)},${rand(256)})`);
    });
}

window.addEventListener('load', pageLoaded);

/** случайное число */
function rand(max) {
    return Math.floor(Math.random() * max);
}