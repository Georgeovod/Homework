'use strict'

const fib = (n = 1) => {
    let arrFib = [0, 1];
    let result = null;

    for (let i = 2; i < n; ++i) {
        let penultimateNum = arrFib[arrFib.length - 2];
        let lastNum = arrFib[arrFib.length - 1];
        let sumOfLastNum = lastNum + penultimateNum;
        arrFib.push(sumOfLastNum);
    };
    if (n === 1) {
        return result = arrFib[arrFib.length - 2];
    } else {
        return result = arrFib[arrFib.length - 1];
    }
    
};
console.log(fib(5));