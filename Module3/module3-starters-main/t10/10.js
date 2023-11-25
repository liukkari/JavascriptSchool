'use strict';

function names(event) {
    event.preventDefault();
    const firstName = document.querySelector('[name="firstname"]');
    const firstNameValue = firstName.value;

    const lastName = document.querySelector('[name="lastname"]');
    const lastNameValue = lastName.value;

    const target = document.getElementById('target');
    target.textContent = `Your name is ${firstNameValue} ${lastNameValue}`;
}

const source = document.getElementById('source');
source.addEventListener('submit', names);
