'use strict';

const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

function change() {
    target.src = 'img/picB.jpg';
}

function reset() {
    target.src = 'img/picA.jpg';
}

trigger.addEventListener('mouseover', change);
trigger.addEventListener('mouseout', reset);
