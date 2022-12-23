'use strict'

const num = prompt("Введите число");

if (isNaN(+num)) {
    alert(`${num} - это не число`);
} else if (num === null) {
    alert("Вы отменили");
} else if (num !== null && num.trim() === "") {
    alert("Пустая строка");
} else {
    let years = null;
    const lastNumberOfYearBorn = Number(num[num.length - 1]);
    if (lastNumberOfYearBorn > 1 && lastNumberOfYearBorn <= 4) {
        years = "года";
    } else if (lastNumberOfYearBorn === 1) {
        years = "год";
    } else {
        years = "лет";
    };
    alert(`${num} ${years}`);
};