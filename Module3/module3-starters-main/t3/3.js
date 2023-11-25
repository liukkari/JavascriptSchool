'use strict';
const names = ['John', 'Paul', 'Jones'];

const firstName = names[0];
const secondName = names[1];
const thirdName = names[2];

const target = document.getElementById('target');

for (const name of names) {
    let li = document.createElement('li');
    li.innerHTML = name;
    target.appendChild(li);
}

