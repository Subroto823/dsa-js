/*
# BigMod (Iterative approach)
*/

function bigmod(a, b, m) {
    a = a % m;
    let result = 1;

    while (b > 0) {
        if (b % 2 === 1) {
            result = (result * a) % m;
        }

        a = (a * a) % m;
        b = Math.floor(b / 2);
    }

    return result;
}

const result = bigmod(2, 7, 10);
console.log(result); // Output: 8 (2^7 % 10 = 128 % 10 = 8)
