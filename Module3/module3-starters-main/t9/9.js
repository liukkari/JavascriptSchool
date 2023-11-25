'use strict';

const operators = ['-','+','/','*'];

function calculate() {
    const calculation = document.getElementById('calculation');
    const array = calculation.value.split('');

    let firstNumber = '';
    let event;
    let lastNumber = '';
    let loop = true;

    for (const char of array) {
    if (loop) {
        operators.includes(char) ? (loop=false, event=char)  : firstNumber +=char;
        } else {
            lastNumber += char;
        }
    }
    let result;
    switch (event) {
        case '+':
            result = parseInt(firstNumber) + parseInt(lastNumber);
            break;
        case '-':
            result = parseInt(firstNumber) - lastNumber;
            break;
        case '/':
            result = parseInt(firstNumber) / lastNumber;
            break;
        case '*':
            result = parseInt(firstNumber) * lastNumber;
            break;
    }
    const answer = document.getElementById('result');
    answer.textContent = result;
}

const start = document.getElementById('start');
start.addEventListener('click', calculate);
