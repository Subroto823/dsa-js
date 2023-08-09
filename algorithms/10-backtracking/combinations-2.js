const combinations = (n, k) => {
    let number = new Array(k).fill(0);

    const generate = (at, end) => {
        if (at === k + 1) {
            console.log(...number);
            return;
        }

        for (let i = end + 1; i <= n - k + at; i++) {
            number[at - 1] = i;
            generate(at + 1, i);
        }
    }
    
    generate(1, 0);
}

combinations(4, 2);