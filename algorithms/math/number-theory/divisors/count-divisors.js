/*
Count Divisors

In mathematics, a divisor of an integer is a whole number that divides the given integer evenly without leaving a remainder.

For example:

    Divisors of 10 are 1, 2, 5, and 10, as they divide 10 without leaving a remainder.

    Divisors of 12 are 1, 2, 3, 4, 6, and 12

    Divisors of 7 are 1 and 7, as they are the only integers that divide 7 without leaving a remainder.

The number 1 is considered a divisor of all integers, and each integer is also a divisor of itself. The largest divisor of any integer is the number itself. 

*/

// Time Complexity: O(n)
var countDivisors = function (number) {
    let count = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    return count;
}

console.log(countDivisors(4));
console.log(countDivisors(12));
console.log(countDivisors(18));


/**
 * Efficient approach to count divisors.
 * Time Complexity: O(sqrt(n)) 
 * 
 * Idea:
 * - If the divisors are the same, count one.
 * - If the divisors are different, count two.
 */

var countDivisors = function (number) {
    let count = 0;

    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            if (number / i === i) {
                count += 1;
            } else {
                count += 2;
            }
        }
    }

    return count;
}

console.log(countDivisors(4));
console.log(countDivisors(24));