'use strict';

const bodyElement = document.querySelector('body');
const nameLib = document.querySelector('#name');
const foodLib = document.querySelector('#food');
const dayLib = document.querySelector('#day');
const locationLib = document.querySelector('#location');
const verbLib = document.querySelector('#verb')
const nameHolders = document.querySelector('#nameHolder');
const foodHolders = document.querySelector('#foodHolder');
const dayHolders = document.querySelector('#dayHolder');
const locationHolders = document.querySelector('#locationHolder');
const verbHolders = document.querySelector('#verbHolder')
const submitButton = document.querySelector('#submit');





submitButton.addEventListener('click', function () {
    nameHolders.innerText = nameLib.value;
    foodHolders.innerText = foodLib.value;
    dayHolders.innerText = dayLib.value;
    locationHolders.innerText = locationLib.value;
    verbHolders.innerText = verbLib.value;
});