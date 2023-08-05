/*
# Euler's Totient Function (φ function) for a single number
    # Efficient Approach
    # Time Complexity: O(sqrt(n))

    Example,
        n = 60
        prime factorials of n are 2, 2, 3, 5

        60 = 2 ^ 2 * 3 ^ 1 * 5 ^ 1
        φ(60) = n * (1 - 1 / 2) * (1 - 1 / 3) * (1 - 1 / 5)
        φ(60) = n * ((2 - 1) / 2) * ((3 - 1) / 3) * (( 5 - 1) / 5)
        φ(60) = 16
*/

function eulerTotientFunction(n) {
    let result = n;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            while (n % i === 0) {
                n /= i;
            }

            result *=  (i - 1);
            result /= i;
        }
    }

    if (n > 1) {
        result *= (n - 1);
        result /= n;
    }

    return result;
}

const n = 60;
const phiOfN = eulerTotientFunction(n);
console.log(`φ(${n}) = ${phiOfN}`); 