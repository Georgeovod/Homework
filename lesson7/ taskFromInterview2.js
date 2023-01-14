'use strict'

const fib = (n = 1) => {
    let a = 0;
    let b = 1;

    for (let i = 2; i < n; ++i) {
        [a, b] = [b, a + b];
    };
    return console.log(b);
};

fib(5);