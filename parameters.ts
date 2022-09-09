// required and optional parameters

// 3rd paramter is optional
function add1(num1: number, num2: number, num3?: number) : number { //num3 is optional so use qs mark
    return num3? num1 + num2 + num3 : num1+ num2;
}

// required parameters
const sub1 = (num1: number, num2: number, num3 = 10) : number => (num1 - num2 - num3);
// num3 is required or it will take default value as 10


//rest parameters
function add2(num1: number, num2: number, ...num3: number[]): number { //rest is ...num3
    return num1 + num2 + num3.reduce((a,b) => a+b, 0);
}

console.log(add2(2, 3, 5, 6, 7, 8, 9));

// we dont have to specify 10 params, 5-9 all goes in num3