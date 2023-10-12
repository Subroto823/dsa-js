const permutations = function (low, high) {
    const visited = new Array(low + high + 1).fill(false),
        number = new Array(high - low + 1).fill(0);

    const generate = function (idx) {
        if (idx === high + 1) {
            console.log(...number);
            return;
        }

        for (let i = low; i <= high; i++) {
            if (visited[i]) continue

            visited[i] = true;
            number[idx - low] = i;
            generate(idx + 1);
            visited[i] = false;
        }
    }

    generate(low);
}

permutations(2, 4);