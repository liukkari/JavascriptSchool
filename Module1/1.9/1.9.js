'use strict';


const number = prompt('Give me a integer. A number with no decimal.');
const numberInt = parseInt(number);

let prime = true;
for (let i = 2; i < numberInt; i++) {
    if (numberInt % i === 0) {
        prime = false;
    }

}

if (prime) {
    document.querySelector('#prime').innerHTML = `Number ${number} is a prime number.`;
} else {
    document.querySelector('#prime').innerHTML = `Number ${number} is NOT a prime number.`;
}
