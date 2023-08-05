function modularSubtraction(a, b, m) {
    return ((a % m) - (b % m) + m) % m;
}

const result = modularSubtraction(15, 7, 10);
console.log(result); // Output: 8 (15 - 7 + 10 = 18, 18 % 10 = 8)
