const sum = function (...num) {
  return num.reduce((total, current) => total + current);
};

const subtract = function (...num) {
  return num.reduce((total, current) => total - current);
};

const multiply = function (...num) {
  return num.reduce((total, current) => total * current);
};

const divide = function (...num) {
  return num.reduce((total, current) => total / current);
};

const operate = function (operator, a, b) {
  switch (operator) {
    case '+':
      return sum(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
};

const btn = document.querySelectorAll('.btn');
const display = document.querySelector('#display');
const ArithOperators = document.querySelectorAll('.operator');
const equalOperator = document.querySelector('#equal');
const clear = document.getElementById('wipe');

let result;
let operatorValue = '';
let value;
let firstValue = '';
let secondValue = '';
let error = '';

// display text content and store value in displayValue

const createDisplayValue = (e) => {
  value = e.target.textContent;
  if (operatorValue == '') {
    firstValue += value;
    display.textContent = firstValue;
  } else if (firstValue !== '') {
    secondValue += value;
    display.textContent = secondValue;
  }
};

// store operation value and when user click another operation value, operate()

const storeOperation = (e) => {
  if (operatorValue !== '') {
    operatorValue = operatorValue;
  } else {
    operatorValue = e.target.textContent;
  }
  if (firstValue && secondValue && operatorValue !== '') {
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    result = operate(operatorValue, firstValue, secondValue);
    result = Math.round(result * 100) / 100;
    display.textContent = result;
    firstValue = result;
    secondValue = '';
    operatorValue = '';
  }
  operatorValue = e.target.textContent;
};

// calculate result when user click on equal button

const calcEqualResult = () => {
  if (firstValue == '' || secondValue == '') {
    error = `ERROR!! what's a number equal to!! itself duh`;
    display.textContent = error;
    firstValue = '';
    secondValue = '';
    operatorValue = '';
    return error;
  } else if (secondValue == 0 && operatorValue == '/') {
    error = `can't divide any number by zero! it's infinity..duh`;
    display.textContent = error;
    firstValue = '';
    secondValue = '';
    operatorValue = '';
    return error;
  }
  firstValue = parseInt(firstValue);
  secondValue = parseInt(secondValue);
  result = operate(operatorValue, firstValue, secondValue);
  result = Math.round(result * 100) / 100;
  display.textContent = result;
  firstValue = result;
  secondValue = '';
};

const createWipeData = () => {
  firstValue = '';
  secondValue = '';
  operatorValue = '';
  display.textContent = 'Display';
};

btn.forEach((button) => button.addEventListener('click', createDisplayValue));

ArithOperators.forEach((operator) =>
  operator.addEventListener('click', storeOperation)
);

equalOperator.addEventListener('click', calcEqualResult);

clear.addEventListener('click', createWipeData);
