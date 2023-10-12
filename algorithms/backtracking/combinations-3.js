const combinations = function (n, k) {
    let number = new Array(k).fill(0);
    let result = [];

    const generate = function (at, end) {
        if (at === k + 1) {
            result.push([...number])
            return;
        }

        for (let i = end + 1; i <= n - k + at; i++) {
            number[at - 1] = i;
            generate(at + 1, i);
        }
    }

    generate(1, 0);
}

console.time();
combinations(24, 10);
console.timeEnd();
