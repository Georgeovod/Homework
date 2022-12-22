const num = prompt("Введите число");

let result = null;
if (num < 2) {
    result = false;
}
for (i = 2; i < num; i++) {
    if (num % i === 0) {
        result = false;
        break;
    } else {
        result = true;
    }
};
console.log(result);