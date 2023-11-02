/*
Factorial

Factorial is a mathematical function that is used to calculate the product of all positive integers from 1 to a given non-negative integer n. 
It is denoted by the symbol n!. 

For example:

    0! = 1 (by convention)
    1! = 1
    2! = 2 * 1 = 2
    3! = 3 * 2 * 1 = 6
    4! = 4 * 3 * 2 * 1 = 24
    ...
    In general, n! = n * (n-1) * (n-2) * ... * 2 * 1.


    - Time Complexity O(n)
*/

const factorial = function (num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}


/**
 * Recursive Approach
 */
const recursiveFactorial = function (number) {
    if (number <= 0) return 1;
    return number * recursiveFactorial(number - 1);
}


function main() {
    console.log(factorial(5));
    console.log(recursiveFactorial(5));
}

if (require.main === module) main();
module.exports = factorial;