'use strict';

const target = document.getElementById('target');

const li1 = document.createElement('li');
const li1Text = document.createTextNode('First item');
li1.appendChild(li1Text);

const li2 = document.createElement('li');
const li2Text = document.createTextNode('Second item');
li2.appendChild(li2Text);

const li3 = document.createElement('li');
const li3Text = document.createTextNode('Third item');
li3.appendChild(li3Text);

target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);

target.children[1].classList.add('my-item');
