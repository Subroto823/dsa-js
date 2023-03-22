function permutation(low, high) {
    const visited = new Array(low + high + 1).fill(false);
    const number = new Array(high - low + 1).fill(0);

    function generate(idx) {
        if (idx === high + 1) {
            console.log(...number);
            return;
        }

        for (let i = low; i <= high; i++) {
            if (!visited[i]) {
                visited[i] = true;
                number[idx - low] = i;
                generate(idx + 1);
                visited[i] = false;
            }
        }
    }

    generate(low);
}

permutation(1, 3);