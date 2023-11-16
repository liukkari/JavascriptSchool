'use strict';

const rolls = prompt('How many times you want a roll a dice.');
const rollsInt = parseInt(rolls);

let sum = 0;
for (let i=0; i < rollsInt; i++) {
    let number = Math.floor(Math.random() * 6 + 1);
    sum += number;
}

document.querySelector('#dice').innerHTML = `Sum of the rolls is: ${sum}.` ;
