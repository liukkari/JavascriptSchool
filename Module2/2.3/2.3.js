'use strict';

const array = [];
for (let i=0; i < 6; i++) {
    let name = prompt('Give me a dog name.');
    array.push(name);
}
array.sort();
array.reverse();
const list = document.querySelector('#list');
console.log(array);
let j = 0;
while (j < 6) {
    let item = document.createElement('li');
    item.textContent = array[j];
    list.appendChild(item);
    j++;
}
