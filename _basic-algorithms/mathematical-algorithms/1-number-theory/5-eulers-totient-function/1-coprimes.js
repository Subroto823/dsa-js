/*
# Co-Prime

Two positive integers a and b are said to be "coprime" (also known as "relatively prime" or "mutually prime") if their greatest common divisor (GCD) is equal to 1. In other words, there are no common divisors other than 1 between the two numbers.

# Formally, given two positive integers a and b, the condition for them to be coprime is:

    gcd(a, b) = 1

Here, gcd(a, b) represents the greatest common divisor of a and b.

# For example:

    * 4 and 9 are coprime because gcd(4, 9) = 1. The only positive integer that divides both 4 and 9 is 1.
    * 15 and 28 are coprime because gcd(15, 28) = 1. They have no common divisors other than 1.
    * 10 and 25 are not coprime because gcd(10, 25) = 5. Both 10 and 25 are divisible by 5.
*/


function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function areCoprimes(a, b) {
    return gcd(a, b) === 1;
}

const number1 = 15;
const number2 = 28;
console.log(areCoprimes(number1, number2));

/*
When two numbers are coprime, it means they share no common factors other than 1, and as a result, their fraction cannot be further simplified. The concept of coprime numbers is essential in number theory, particularly when dealing with Euler's Totient Function, modular arithmetic, and RSA encryption algorithms, among other applications. */ 