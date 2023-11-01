/**
 * Fibonacci Sequence 
 * Time Complexity: O(n)
 */

const fibonacciSequence = function(number) {
    const sequence = [0, 1];

    for(let i = 2; i < number; i++) {
        next = sequence[i - 2] + sequence[i - 1];
        sequence.push(next);
    }
    return sequence;
}

console.log(fibonacciSequence(6));
