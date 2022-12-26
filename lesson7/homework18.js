'use strict'

const padString = (str, lengthOfStr, symbol, rightOrLeft = true) => {
    let result = '';
    if (!isNaN(str) || str === undefined || str.trim() === "") {
        return result = 'some error with string';
    } else if (lengthOfStr === undefined || isNaN(+lengthOfStr) || lengthOfStr < 1) {
        return result = 'some error with length of string';
    } else if (str.length > lengthOfStr) {
        const diffStr = str.length - (str.length - lengthOfStr);
        return result = str.substr(0, diffStr);
    } else if (symbol === undefined || symbol.trim() === "") {
        return result = 'some error with symbol';
    } else if (rightOrLeft != true && rightOrLeft != false) {
        return result = 'some error with right or left based';
    } else {
        for (let i = str.length; i < lengthOfStr; ++i) {
            result += symbol;
        };
    };
    if (rightOrLeft === true) {
        result = str + result;
    } else {
        result = result + str;
    };
    return result;
};
const info = padString( "hello", 8, '*');
console.log(info);