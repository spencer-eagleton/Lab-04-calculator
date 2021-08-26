// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { add } from '../calculator.js';

import { subtract } from '../calculator.js';

import { multiply } from '../calculator.js';

import { divide } from '../calculator.js';

const test = QUnit.test;



// name your test by what it is testing
test('add two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 1;
    const y = 3;
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract two numbers', (expect) => {
    const x = 6;
    const y = 3;
    const expected = 3;

    const actual = subtract(x, y);
    expect.equal(actual, expected);

});

test('multiply two numbers', (expect) => {
    const x = 5;
    const y = 10;
    const expected = 50;

    const actual = multiply(x, y);
    expect.equal(actual, expected);

});

test('divide two numbers', (expect) => {
    const x = 60;
    const y = 5;
    const expected = 12;

    const actual = divide(x, y);
    expect.equal(actual, expected);

});