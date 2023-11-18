'use strict';

let loop = true;
let array = [];
while (loop) {
    let number = prompt('Give me a number. Number previously entered end the program.');
    let numberInt = parseInt(number);
    if (array.includes(numberInt)) {
        loop = false;
    } else {
        array.push(numberInt);
    }
}

array.sort((a,b) => a-b);

for (let item of array) {
    console.log(item);
}
