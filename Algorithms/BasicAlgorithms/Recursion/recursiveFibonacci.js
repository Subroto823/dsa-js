/*
 * Fibonacci recursive implementation
 * Time complexity - O(2^n) ........terrible
 * recursion is not a good solution to the fibonacci solution problem
 */

const fibonacciSequence = (number) => {
    if(number < 2) {
        return number;
    }
    return fibonacciSequence(number - 2) + fibonacciSequence(number - 1);
}

console.log(fibonacciSequence(6));
