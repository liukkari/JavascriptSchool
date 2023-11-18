'use strict';

const dice = (dice) => {
    let number = Math.floor(Math.random()*dice + 1);
    return number;
}

const sides = prompt('How many sides dice you wanna roll?');
const sidesInt= parseInt(sides);

let loop = true;
const list = document.querySelector('#list');
while (loop) {
    let result = dice(sidesInt);
    if (result === sidesInt) {
        loop = false;
    }
    let item = document.createElement('li');
    item.textContent = result;
    list.appendChild(item);
}
