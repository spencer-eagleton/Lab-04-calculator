// import functions

import { add } from './calculator.js';
import { subtract } from './calculator.js';
import { multiply } from './calculator.js';
import { divide } from './calculator.js';


// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');
 


// set event listeners 
addButton.addEventListener('click', () => {
     // get user input(s)
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);
        // do any needed work with the value(s)
    const sum = add(num1, num2);
     // update DOM to reflect new value(s)
    addAnswer.textContent = sum;
       
});

const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');
 
subtractButton.addEventListener('click', () => {
    const num1 = Number(subtractNumber1.value);
    const num2 = Number(subtractNumber2.value);
        // do any needed work with the value(s)
    const difference = subtract(num1, num2);

    subtractAnswer.textContent = difference;

}); 

const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

multiplyButton.addEventListener('click', () => {
    const num1 = Number(multiplyNumber1.value);
    const num2 = Number(multiplyNumber2.value);

    const product = multiply(num1, num2);

    multiplyAnswer.textContent = product;
});

const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

divideButton.addEventListener('click', () => {
    const num1 = Number(divideNumber1.value);
    const num2 = Number(divideNumber2.value);

    const quotient = divide(num1, num2);

    divideAnswer.textContent = quotient;
});