function combine(n, k) {
    let number = new Array(k).fill(0);

    function combination(at, end) {
        if(at === k + 1) {
            console.log(...number);
            return;
        }

        for(let i = end + 1; i <= n - k + at; i++) {
            number[at - 1] = i;
            combination(at + 1, i);
        }
    }
    combination(1, 0);
}

combine(4, 2);