/*
# Euler's Totient Function (φ function) for a single number
    # Efficient Approach
    # Time Complexity: O()
*/

function eulerTotientFunction(n) {
    let result = n;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            while (n % i === 0) {
                n /= i;
            }
            result -= result / i;
        }
    }

    if (n > 1) {
        result -= result / n;
    }

    return result;
}

const n = 12;
const phiOfN = eulerTotientFunction(n);
console.log(`φ(${n}) = ${phiOfN}`);
  
/*
The eulerTotientFunction function takes a positive integer n as input and calculates the φ function value for that number.
  
    * let result = n; Initialize the variable result to the input number n. This variable will store the current value of φ(n) during the calculations.

    * The for loop for (let i = 2; i * i <= n; i++) iterates through all numbers i from 2 up to the square root of n. These are potential prime factors of n.

    * Inside the loop, the condition if (n % i === 0) checks if i is a factor of n, i.e., if i is a prime factor of n.

    * If i is a prime factor of n, we enter the while loop while (n % i === 0), which keeps dividing n by i as long as it remains a multiple of i. This step removes all occurrences of i as a factor from n.

    * After removing all occurrences of i from n, we apply the φ function formula result -= result / i;. This step reduces the current value of φ(n) by φ(n) / i, effectively removing the numbers that have i as a factor.

    * The process continues for all prime factors of n, and after the loop, n will be either 1 or a prime number greater than 1.

    * If n is still greater than 1 after the loop, it means n is a prime factor itself. In this case, we apply the formula again result -= result / n; to remove the numbers that have n as a factor.

    * Finally, the function returns the value of φ(n) stored in the result variable.
  
The φ function has various applications in number theory, cryptography, and algorithm design. For example, in cryptography, it is used in the RSA encryption algorithm to find large prime numbers and compute their totient values for secure encryption and decryption processes.

The value of φ(n) provides important information about the relative prime numbers to n, making it a useful tool in solving a wide range of mathematical problems.
*/