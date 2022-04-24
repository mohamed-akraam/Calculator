const sum = function (...num) {
    return num.reduce((total, current) => total + current
)};

const subtract = function (...num) {
    return num.reduce((total, current) => total - current
)};

const multiply = function (...num) {
    return num.reduce((total, current) => total * current
)};

const divide = function (...num) {
    return num.reduce((total, current) => total / current
)};

const operate = function (operator, a, b) {
    switch (operator) {
        case '+':
            return sum(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a, b);
    }
};

const btn = document.querySelectorAll('.btn');
const display = document.querySelector('#display');
const ArithOperators = document.querySelectorAll('.operator');
const equalOperator = document.querySelector('#equal');

let value = '';
let displayValue = '';

// display text content and store value in displayValue 

const createDisplayValue = (e => {
    value = e.target.textContent;
    displayValue += parseInt(value);
    display.textContent = displayValue;
});

btn.forEach(button => button.addEventListener('click', createDisplayValue));

const getFirstNumber = (e => {
    console.log(e.target.textContent);

})

ArithOperators.forEach(operator => operator.addEventListener('click', getFirstNumber));

