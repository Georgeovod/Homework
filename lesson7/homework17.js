'use strict'

const num = prompt("Введите число");
const degree = prompt("Введите степень");

const numToPow = (num, degree = 1) => {
    let result = null;
    if (isNaN(+num) || isNaN(+degree)) {
        result = 'some error';
    } else if (num.trim() === "" || degree.trim() === "") {
        result = 'some error';
    } else {
        result = Math.pow(num, degree);
    };
    return result;
};

const result = numToPow(num, degree);
alert (result);