let numOrStr = prompt('input number or string');
console.log(numOrStr);
numOrStr = numOrStr != null ? numOrStr.trim() : numOrStr;
numOrStr = isNaN(+numOrStr) ? true : numOrStr;

switch (numOrStr) {
    case null:
        console.log('вы отменили');
        break;
    case '':
        console.log('Empty String');
        break;
    case true:
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
};