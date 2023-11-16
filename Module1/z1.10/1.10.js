'use strict';

const dices = prompt('How many dices you want to roll?');
const dicesInt = parseInt(dices);

const sum = prompt('What is the sum of the dices you want?');
const sumInt = parseInt(sum);

let i = 0;
let times = 0;
while (i < 10000) {
    let roll = 0;
    for (let j = 0; j < dicesInt; j++) {
            const number = Math.floor(Math.random()* 6 + 1);
            roll += number;
    }
    if (roll === sumInt) {
        times += 1;
    }
    i++;
}

const probability = times/10000 * 100;
const fixedProbability = probability.toFixed(2);

document.querySelector('#result').innerHTML = `Probability to get sum ${sum} with ${dices} dice is ${fixedProbability}%`;
