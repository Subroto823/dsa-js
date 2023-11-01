/**
Given a number, check if the number is a power of two.

    2^0 = 1
    2^1 = 2
    2^2 = 4
    2^3 = 8 ... and so on


- Time Complexity O(O(logn))
 */

var isPowerOfTwo = function (number) {
    if (number < 2 || number % 2 !== 0) return false;

    while (number > 1) {
        if (number % 2 !== 0) return false;
        number = number / 2;
    }

    return true;
}

console.log(isPowerOfTwo(8));
console.log();


/**
 * Bitwise Solution
 * Time Complexity: O(1)
 */

var isPowerOfTwo = function (number) {
    if (number < 2) return false;
    return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(28));