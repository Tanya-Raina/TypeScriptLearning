let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number) : [number, number] {
    return [num2, num1];
};

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];
swapNumbs[1];

// tuples help return more than 1 values from function