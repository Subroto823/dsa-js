function permutation(num1, num2) {
    const visited = new Array(num2 + num1 + 1).fill(false);
    const number = new Array(num2 - num1 + 1).fill(0);

    generate(num1, num1, num2, number, visited);
}

function generate(idx, n1, n2, number, visited) {
    if (idx === n2 + 1) {
        console.log(...number);
        return;
    }

    for (let i = n1; i <= n2; i++) {
        if (visited[i]) continue;

        visited[i] = true;
        number[idx - n1] = i;
        generate(idx + 1, n1, n2, number, visited);
        visited[i] = false;
    }
}

permutation(2, 7);