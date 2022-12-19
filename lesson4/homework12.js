'use strict'

let yearOfBorn = Number(prompt("Введите ваш год рождения"));
let userCity = prompt("В каком городе вы живете?");
let userSport = prompt("Какой ваш любимый вид спорта?");

let today = new Date();
let currentYear = today.getFullYear();
let years = "лет";
let yearOfBornStr = String(currentYear - yearOfBorn);
let lastNumberOfYearBorn = Number(yearOfBornStr[yearOfBornStr.length - 1]);

if (lastNumberOfYearBorn > 0 && lastNumberOfYearBorn <= 4) {
    years = "года";
};

yearOfBorn = yearOfBorn === 0 || isNaN(yearOfBorn) ? ("Жаль, что Вы не захотели ввести свой возраст:(") : (`Ваш возраст ${currentYear - yearOfBorn} ${years}`);

switch (userCity) {
    case null:
    case "":
        userCity = ("Жаль, что Вы не захотели ввести свой город:(");
        break;
    case "Киев":
        userCity = ("Ты живёшь в столице Украины");
        break;
    case "Москва":
        userCity = ("Ты живёшь в столице россии");
        break;
    case "Минск":
        userCity = ("Ты живёшь в столице ,беларуси");
        break;
    default:
        userCity = (`Ты живёшь в городе ${userCity}`);
        break;
};

const box = "бокс";
const formula1 = "формула-1";
const tennis = "теннис";

switch (userSport) {
    case null:
    case "":
        userSport = ("Жаль, что Вы не захотели ввести свой любимый спорт:(");
        break;
    case box:
        userSport = ("Круто! Хочешь стать как Александр Усик?");
        break;
    case formula1:
        userSport = ("Круто! Хочешь стать как Макс Ферстаппен?");
        break;
    case tennis:
        userSport = ("Круто! Хочешь стать как Роджер Федерер?");
        break;
};
let userData = `${yearOfBorn} \n${userCity} \n${userSport}`;
alert(userData);