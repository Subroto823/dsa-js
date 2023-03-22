// permutation from 0 to n
function permutation(n) {
    const visited = new Array(n).fill(false);
    const number = new Array(n).fill(0);

    generate(0, n, number, visited);
}

function generate(idx, n, number, visited) {
    if(idx === n + 1) {
        console.log(...number);
        return;
    }

    for(let i = 0; i <= n; i++) {
        if(visited[i]) continue;

        visited[i] = true;
        number[idx] = i;
        generate(idx + 1, n, number, visited);
        visited[i] = false;
    }
}

permutation(2);