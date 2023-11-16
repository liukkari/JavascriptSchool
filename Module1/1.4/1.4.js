'use strict';

const student = prompt('What is your name?');
const number = Math.floor(Math.random() * 4) + 1;
const club = document.querySelector('#club');

switch (number) {
    case 1:
        club.innerHTML = `${student}, you are Gryffindor` ;
        break;
    case 2:
        club.innerHTML = `${student}, you are Slytherin`;
        break;
    case 3:
        club.innerHTML = `${student}, you are Hufflepuff`;
        break;
    case 4:
        club.innerHTML = `${student}, you are Gryffindor`;
        break;

}
