/*
# Nth Fibonacci
    # Iterative approach (efficient)
    # Time complexity - O(n)

    (Fibonacci Sequence: 0, 1, 1, 2, 3, 5 ... so on)
*/

function nthFibonacci(n) {
    if (n <= 0) return 0;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

console.log(nthFibonacci(5));