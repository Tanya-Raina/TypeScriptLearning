"use strict";
// remember to specify return type of function too!
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
// arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
// function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(4, 11));
