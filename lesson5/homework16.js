'use strict'

const num = prompt("Введите число");
let result = null;

if (num < 2) {
    result = NaN;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result = `Наименьший делитель это ${i}`;
            break;
        } else {
            result = "Это простое число";
        };
    };
};
console.log(result);