'use strict';

let loop = true;
const array = [];
while (loop) {
    let number = prompt('Give me numbers. Number 0 end this.');
    let numberInt = parseInt(number);

    if (numberInt === 0) {
        loop = false;
    } else {
        array.push(numberInt);
    }
}

array.sort((a,b) => b-a);

for (let i=0; i < array.length; i++) {
    console.log(array[i]);
}
