/*
In mathematics, a divisor of an integer is a whole number that divides the given integer evenly without leaving a remainder. In other words, if a and b are two integers, and a divided by b results in a whole number, then b is a divisor of a.

For example:

    Divisors of 10 are 1, 2, 5, and 10, as they divide 10 without leaving a remainder.

    Divisors of 12 are 1, 2, 3, 4, 6, and 12, as they divide 12 without leaving a remainder.

    Divisors of 7 are 1 and 7, as they are the only integers that divide 7 without leaving a remainder.

The number 1 is considered a divisor of all integers, and each integer is also a divisor of itself. Additionally, the smallest divisor (other than 1) of any integer greater than 1 is always 2. The largest divisor of any integer is the number itself. */

function countDivisors(number) {
    let count = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    return count;
}

console.log(countDivisors(10));
console.log(countDivisors(12));
console.log(countDivisors(18));
/* 
This linear implementation is simpler, but it has a time complexity of O(n), where n is the given number.
*/