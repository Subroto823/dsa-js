/*
Using Precalculated Factorials
*/
function factorial(n) {
    let result = 1;
    const factorials = [1];

    for (let i = 1; i <= n; i++) {
        result *= i;
        factorials.push(result);
    }

    return factorials;
}

function nCr(n, r, factorial) {
    if (n < r) {
        throw new Error("n should be greater than or equal to r.");
    }
    
    return factorial[n] / (factorial[r] * (factorial[n - r]));
}

const n = 5;
const factorials = factorial(n)
const r = 2;
const result = nCr(n, r, factorials); // 5C2 = 10
console.log(result);