// Task2
//exercise1
//let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

//exercise2
//let a = 2;
let x = 1 + (a *= 2); // 5

//exercise3
"" + 1 + 0    // "10"
"" - 1 + 0    // -1
true + false  //1
6 / "3"       //2
"2" * "3"     //6
4 + 5 + "px"  //"9px"
"$" + 4 + 5   //"$45"
"4" - 2       //2
"4px" - 2     //NaN
"  -9  " + 5  //"-95"
"  -9  " - 5  //-14
null + 1      //1
undefined + 1 //NaN
" \t \n" - 2  //-2

//exercise4
let a = Number(prompt("Первое число?", 1));
let b = Number(prompt("Второе число?", 2));

alert(a + b); // 3

//Task3
5 > 4               //true
"ананас" > "яблоко" //false
"2" > "12"          //true
undefined == null   //true
undefined === null  //false
null == "\n0\n"     //false
null === +"\n0\n"   //false