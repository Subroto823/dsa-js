/**
 * Primality Test
 * 
 * Naive Approach
 * Time Complexity O(n)
 */

var isPrime = function (number) {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


/**
 * Efficient Approach
 * 
 * Idea:
 * Integers larger than the square root do not need to be checked because, whenever "number = a*b", one of the two factors "a" and "b" is less than or equal to the square root of "n"
 * 
 * Time Complexity O(sqrt(n))
*/

var isPrime = function (number) {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


/**
 * More Efficient
 * Time Complexity: O(sqrt(n))
 */
var isPrimeII = function (n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}


function main() {
    console.log(isPrime(2504987));
    console.log(isPrime(17));
    console.log(isPrime(15));
    console.log();

    console.log(isPrime(17));
    console.log(isPrime(999998727899999));
}

if (require.main === module) main();
module.exports = isPrime;