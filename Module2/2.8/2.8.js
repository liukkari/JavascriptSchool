'use strict';

function concat(names) {
    let string = '';
    for (name of names) {
        string += name;
    }
return string;
}

const array = ['Liu','Kata','Jafar','Nichakon'];
const result = concat(array);

const print = document.querySelector('#concat');
print.innerHTML = result;
