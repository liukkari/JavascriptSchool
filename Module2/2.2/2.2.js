'use strict';

const participants = prompt('How many participants?');
const array = [];

let rounds = parseInt(participants);
while (rounds > 0) {
    let name = prompt('Give me a name');
    array.push(name);
    rounds -= 1;
}

array.sort();
const list = document.querySelector('#list');
rounds = parseInt(participants);
for (let i=0; i < rounds; i++) {
    let item = document.createElement('li');
    item.textContent = array[i];
    list.appendChild(item);

}
