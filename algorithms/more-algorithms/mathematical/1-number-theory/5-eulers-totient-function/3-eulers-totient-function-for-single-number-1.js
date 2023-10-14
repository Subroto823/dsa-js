/*
# Euler's Totient Function (φ function) for a single number (Basic Implementation)

Euler's Totient Function (φ function) is a mathematical function denoted by the symbol φ(n) that counts the number of positive integers less than or equal to a given positive integer n that are coprime to n. In other words, φ(n) calculates the count of positive integers k (1 ≤ k ≤ n) such that gcd(n, k) = 1, where gcd(n, k) represents the greatest common divisor of n and k.

# The φ function has the following properties:

    # If n is a prime number, then φ(n) = n - 1, as all positive integers less than n are coprime to n.

    # If n is a prime power (n = p^k, where p is a prime and k ≥ 1), then φ(n) = p^k - p^(k-1). For example, if n = 8 (2^3), then φ(8) = 8 - 4 = 4, as the coprime positive integers are 1, 3, 5, and 7.
    If a and b are coprime, then φ(a * b) = φ(a) * φ(b)
    
    # Time Complexity O(n * log(min(a, b)))
*/

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function eulerTotientFunction(n) {
    let result = 0;
    for (let k = 1; k <= n; k++) {
        if (gcd(n, k) === 1) {
            result += 1;
        }
    }
    return result;
}

const n = 10;
const phiOfN = eulerTotientFunction(n);
console.log(`φ(${n}) = ${phiOfN}`);

/*
In the basic implementation, we have a loop that iterates from 1 to n, and inside the loop, we calculate the greatest common divisor (GCD) using the gcd function. The time complexity of the gcd function using the Euclidean algorithm is approximately O(log(min(a, b))) for two numbers a and b.

The outer loop runs n times, and for each iteration, the gcd function is called. Therefore, the overall time complexity of the basic implementation is approximately O(n * log(min(a, b))). */ 