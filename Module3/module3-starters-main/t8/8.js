'use strict';

function calculate() {
    const firstNumber = document.getElementById('num1');
    const secondNumber = document.getElementById('num2');
    const operation = document.getElementById('operation');

    const firstNumberValue = parseInt(firstNumber.value);
    const secondNumberValue = parseInt(secondNumber.value);
    const operationValue = operation.value;

    const result = document.getElementById('result');
    let resultValue;
    switch (operationValue) {
        case 'add':
            resultValue = firstNumberValue + secondNumberValue;
            break;
        case 'sub':
            resultValue = firstNumberValue - secondNumberValue;
            break;
        case 'multi':
            resultValue = firstNumberValue * secondNumberValue;
            break;
        case 'div':
            resultValue = firstNumberValue / secondNumberValue;
            break;
}
    console.log(resultValue);
    result.textContent = resultValue;
}
const start = document.getElementById('start');
start.addEventListener('click', calculate);

