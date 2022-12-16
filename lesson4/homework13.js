'use strict'

//Task1
let x = 10;
let y = 7;

x > y ? console.log("x больше, чем y") : console.log("x не больше, чем y");

//Task2
let num = +prompt("Введите число");

if (num %2 === 0) {
    alert(`Число ${num} четное`);
} else {
    alert(`Число ${num} нечетное`);
};

//Task3
let num1 = prompt("Введите целое число");
let numLength = num1.length;
let moduleOfNumber = "";
let result = "";

if (num1[0] === "-") {
    moduleOfNumber = " отрицательное"
    numLength -= 1;
} else {
    moduleOfNumber = " положительное";
};

switch (numLength) {
    case 1:
        result = `Число ${num1} однозначное`;
        break;
    case 2:
        result = `Число ${num1} двухзначное`;
        break;
    case 3:
        result = `Число ${num1} трехзначное`;
        break;
    default:
        result = `Число ${num1} четырехзначное или более`;
        break;
};
alert(result + moduleOfNumber);

//Task4
let number1 = +prompt("Введите первое число");
let number2 = +prompt("Введите второе число");
let number3 = +prompt("Введите третье число");

if (number1 > number2 && number1 > number3) {
    alert(`Наибольшее число ${number1}`);
} else if (number2 > number1 && number2 > number3) {
    alert(`Наибольшее число ${number2}`);
} else {
    alert(`Наибольшее число ${number3}`);
};

//Task5
let a = +prompt("Введите первую сторону треугольника");
let b = +prompt("Введите вторую сторону треугольника");
let c = +prompt("Введите третью сторону треугольника");

if ((a + b) > c && (a + c) > b && (b + c) > a) {
    alert("Такой треугольник может существовать");
} else {
    alert("Такой треугольник не может существовать");
};