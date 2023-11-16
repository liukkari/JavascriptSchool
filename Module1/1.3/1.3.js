'use strict';

const number1 = prompt('Give me the first integer also known as number.');
const number1Int = +number1;

const number2 = prompt('Give me the second integer.');
const number2Int = +number2;

const number3 = prompt('Give me one last time the third integer.');
const number3Int = +number3;

const summa = number1Int + number2Int + number3Int;
const sum = document.querySelector('#sum');
sum.innerHTML = 'Annettujen lukujen summa on: ' + summa;

const tulo = number1Int * number2Int * number3Int;
const product = document.querySelector('#product');
product.innerHTML = 'Annettujen lukujen tulo on: ' + tulo;

const keskiarvo = summa/3;
const average = document.querySelector('#average');
average.innerHTML = 'Annettujen lukujen keskiarvo on: ' + keskiarvo;
