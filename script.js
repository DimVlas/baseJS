// решение преподавателя
function pageLoaded() {
    let colors = ['red', 'green', 'blue'];

    function setRandomColor() {
        let ind = rand(colors.length);
        let color = colors[ind];

        this.style.color = color;
    }
    function addRandomColor() {
        colors.push(`rgb(${rand(256)},${rand(256)},${rand(256)})`);
    }

    let alertSome = document.querySelector(".alert-some");
    let alertOther = document.querySelector(".alert-other");
    let btnAdd = document.querySelector('.btnAdd');

    alertSome.addEventListener('click', setRandomColor);

    alertOther.addEventListener('mousewheel', setRandomColor);

    btnAdd.addEventListener('click', addRandomColor);
}


window.addEventListener('load', pageLoaded);

/** случайное число */
function rand(max) {
    return Math.floor(Math.random() * max);
}

// function addRandomColor() {
//     colors.push(`rgb(${rand(256)},${rand(256)},${rand(256)})`);
// }

// function setRandomColor() {
//     let ind = rand(colors.length);
//     let color = colors[ind];

//     this.style.color = color;
// }