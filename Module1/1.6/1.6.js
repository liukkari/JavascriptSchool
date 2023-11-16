
'use strict';

const shouldCalculate = confirm('Should I calculate the square root?');

if (shouldCalculate) {
    const number = prompt('Give me a number.');
    const numberInt = parseInt(number);
    if (numberInt < 0) {
        document.querySelector('#calculate').innerHTML = 'The square root of a negative number is not defined.';
    }
    else {
        const calculateRoot = Math.sqrt(numberInt);
        document.querySelector('#calculate').innerHTML =  `The square root is ${calculateRoot}.`;
    }
} else {
    document.querySelector('#calculate').innerHTML = 'The square root is not calculated.';
}

