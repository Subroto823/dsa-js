/**
 * Fibonacci Sequence 
 * 0, 1, 1, 2, 3, 5 ... so on
 * 
 * Time Complexity: O(n)
 */

const fibonacciSequence = function(number) {
    const sequence = new Array(number).fill(0);
    sequence[1] = 1;

    for(let i = 2; i < number; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }

    return sequence;
}

console.log(fibonacciSequence(6));
