'use strict';

const dice = () => {
    let number = Math.floor(Math.random()*6 + 1);
    return number;
}

let loop = true;
const list = document.querySelector('#list');
while (loop) {
    let result = dice();
    if (result === 6) {
        loop = false;
    }
    let item = document.createElement('li');
    item.textContent = result;
    list.appendChild(item);
}
