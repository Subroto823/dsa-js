function solveNQueens(n) {
    const queen = new Int8Array(n);
    const column = new Int8Array(n);
    const diagonal1 = new Int8Array(n * 2);
    const diagonal2 = new Int8Array(n * 2);
    const board = [];

    function solve(at) {
        if (at === n) {
            let solution = [];
            queen.forEach(queenIndex => {
                let newRow = '.'.repeat(queenIndex) + 'Q' + '.'.repeat(n - queenIndex - 1);
                solution.push(newRow);
            })
            board.push(solution);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (column[i] || diagonal1[i + at] || diagonal2[n + i - at]) continue;

            queen[at] = i;

            column[i] = 1
            diagonal1[i + at] = 1;
            diagonal2[n + i - at] = 1;

            solve(at + 1);

            column[i] = 0
            diagonal1[i + at] = 0
            diagonal2[n + i - at] = 0
        }
    }

    solve(0);
    return board;
}

console.log(solveNQueens(9));