'use strict'

const mainFunction = (callback) => {
    let firstNum = prompt("Enter first number");
    let secondNum = prompt("Enter second number");
    return callback(firstNum, secondNum);
};

const exponentiation = (num1, num2) => {
    let result = Math.pow(num1, num2);
    return alert(result);
};

mainFunction(exponentiation);

const multiplay = (num1, num2) => {
    let result = num1 * num2;
    return alert(result);
};

mainFunction(multiplay);

const division = (num1, num2) => {
    let result = num1 / num2;
    return alert(result);
};

mainFunction(division);

const modulo = (num1, num2) => {
    let result = num1 % num2;
    return alert(result);
};

mainFunction(modulo);