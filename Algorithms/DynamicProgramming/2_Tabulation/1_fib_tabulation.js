/*
Write a function `fib(n)` that takes in a number as an argument. The function should return the n-th number of the Fibonacci sequence. 

The 0th and 1st number of the sequence is 0 and 1. To generate the next number of the sequence, we sum the previous two.

fib(n): 0, 1, 1, 2, 3, 5, 8, 13 ... n
*/

const fib = (n) => {
    const table = Array(n+1).fill(0);
    table[1] = 1;
    for(let i = 0; i <= n; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }

    return table[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));

/*
fib tabulation complexity
    O(n) time
    O(n) space */

// we can optimize a little more this function by tracking only two variables for fibonacci numbers instead of an entire array