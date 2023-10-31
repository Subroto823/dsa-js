function modularMultiplication(a, b, m) {
    return (a % m * b % m) % m;
}

const result = modularMultiplication(15, 7, 10);
console.log(result); // Output: 5 (15 * 7 = 105, 105 % 10 = 5)
