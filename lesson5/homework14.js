//Task1
console.log('Од 1 до 100');
for (i = 1; i <= 100; i++) {
    console.log(i);
};

//Task2
console.log('Од 100 до 1');
for (i = 100; i >= 1; i--) {
    console.log(i);
};

//Task3
console.log('Чётные од 1 до 100');
for (i = 1; i <= 100; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
};

//Task4
const arr = [1, 2, 3, 4, 5];
let sum = null;

for (i = 0; i < arr.length; i++) {
    sum += arr[i];
};
console.log('Сумма элементов массива', sum);

//Task5
const arr1 = [1, 2, 3, 4, 5];

let sum1 = null;
for (i = 0; i < arr.length; i++) {
    let squareOfNumber = Math.pow(arr[i], 2);
    sum += squareOfNumber;
};
console.log('Сумма квадратов элементов массива', sum);