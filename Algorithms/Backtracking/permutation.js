let used = new Array(20).fill(0);
let number = new Array(20).fill(0);

const permutation = (at, n) => {
    if (at === n + 1) {
        for (let i = 1; i <= n; i++) {
            process.stdout.write(" " + number[i]);
        }
        process.stdout.write("\n");
        return;
    }
5
    for (let i = 1; i <= n; i++) {
        if (!used[i]) {
            used[i] = 1;
            number[at] = i;
            permutation(at + 1, n);
            used[i] = 0;
        }
    }
}

permutation(1, 3);