function modularAddition(a, b, m) {
    return (a % m + b % m) % m;
}

const result = modularAddition(15, 7, 10);
console.log(result); // Output: 2 (15 + 7 = 22, 22 % 10 = 2)
