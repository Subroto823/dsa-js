// Efficient approach

function countDivisors(number) {
    let count = 0;

    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            if (number / i === i) {
                // If the divisors are equal (e.g., number = i^2), count only once.
                count += 1;
            } else {
                // If the divisors are different
                count += 2; 
            }
        }
    }

    return count;
}

console.log(countDivisors(4));
console.log(countDivisors(24));

/*
This implementation with square root has a time complexity of O(sqrt(n)), which is more efficient for larger numbers. However, for smaller numbers, the linear implementation is still reasonable.

Divisors are an important concept in number theory and are used in various mathematical calculations and problem-solving techniques. They play a significant role in topics such as prime factorization, finding common factors, and solving problems related to counting and combinatorics. */