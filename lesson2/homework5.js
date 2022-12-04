//Task1
const user1 = {};
user1.name = "John";
user1.surname = "Smith";
user1.name = "Pete";
delete user1.name;
console.log(user1);

//Task2
const user2 = {
    name: "John"
};
// это будет работать!
user2.name = "Pete";
console.log(user2);

//Task3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sumOfSalaries = (a, b, c) => {
    let sum = a + b + c;
    return console.log(sum);
}
sumOfSalaries(salaries.John, salaries.Ann, salaries.Pete);