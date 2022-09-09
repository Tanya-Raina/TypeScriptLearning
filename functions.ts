// remember to specify return type of function too!

function add(num1: number, num2: number) : number {
    return num1 + num2;
}

console.log(add(2,3));


// arrow function
const sub = (num1: number, num2: number) : number => num1 - num2;

console.log(sub(2,3));


// function expression
const mult = function(num1: number, num2: number) : number {
    return num1 * num2;
};

console.log(mult(4, 11));