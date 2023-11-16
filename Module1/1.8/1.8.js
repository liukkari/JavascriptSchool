'use strict';

const alkuVuosi = prompt('Anna vuosi, jolla aloitetaan.');
const alkuVuosiInt = parseInt(alkuVuosi);

const loppuVuosi = prompt('Anna vuosi, johon lopetetaan.');
const loppuVuosiInt = parseInt(loppuVuosi);

const year = document.querySelector('#year');
for (let i=alkuVuosiInt; i <= loppuVuosiInt; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        const item = document.createElement('li');
        item.textContent = i;
        year.appendChild(item);

    }
}
