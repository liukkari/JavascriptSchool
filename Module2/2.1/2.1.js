'use strict';

let i = 0;
let array = [];
while (i < 5) {
    let number = prompt('Give me a number.');
    array.push(number);
    i++;
}

for (let j = 5; j >= 0; j--) {
    console.log(array[j])
}
