'use strict';

const year = prompt('Enter a year.');
const yearInt = parseInt(year);

if (yearInt % 100 === 0) {
    if (yearInt % 400 === 0) {
        document.querySelector('#leap').innerHTML = `${year} is a leap year.`;
    }
    else {
        document.querySelector('#leap').innerHTML = `${year} not is a leap year.`;
    }
} else {
    if (yearInt % 4 === 0) {
        document.querySelector('#leap').innerHTML = `${year} is a leap year.`;
    }
    else {
        document.querySelector('#leap').innerHTML = `${year} is not a leap year.`;
    }
}


