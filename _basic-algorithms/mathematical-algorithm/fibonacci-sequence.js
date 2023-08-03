/*
 # Fibonacci Sequence (iterative implementation)
 * Time Complexity: O(n)
 */

const fibonacciSequence = (number) => {
    const fib = [0, 1];

    for(let i = 2; i < number; i++) {
        next = fib[i - 2] + fib[i - 1];
        fib.push(next);
    }
    return fib;
}

console.log(fibonacciSequence(6));
