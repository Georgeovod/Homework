'use strict'

let a = 0;

a === 0 ? console.log('Верно') : console.log('Неверно');                                //1

a > 0 ? console.log('Верно') : console.log('Неверно');                                  //2

a < 0 ? console.log('Верно') : console.log('Неверно');                                  //3
 
a >= 0 ? console.log('Верно') : console.log('Неверно');                                 //4

a <= 0 ? console.log('Верно') : console.log('Неверно');                                 //5

a != 0 ? console.log('Верно') : console.log('Неверно');                                 //6

a == 'test' ? console.log('Верно') : console.log('Неверно');                            //7

a === '1' ? console.log('Верно') : console.log('Неверно');                              //8

a > 0 && a < 5 ? console.log('Верно') : console.log('Неверно');                         //9

a = a === 0 || a === 2 ? (a + 7) : (a / 10);                                            //10
console.log(a);

let b = 3;                                                                              //11
a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);    

(a > 2 && a < 11) || (b >= 6 && b < 14) ? console.log('Верно') : console.log('Неверно');//12

let num = null;                                                                                //13
let result = "";
switch (num) {
    case 1:
        result = "зима";
        break;
    case 2:
        result = "весна";
        break;
    case 3:
        result = "лето";
        break;
    case 4:
        result = "осень";
        break;
};